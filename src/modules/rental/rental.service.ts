import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/services'

import { CreateRentalInput } from './dto/create_rental.input'
import { Rental } from './rental.model'

interface CreateRentalWithUserId extends CreateRentalInput {
  userId: string
}

@Injectable()
export class RentalService {
  constructor(private readonly prisma: PrismaService) {}

  async forUser(userId: string) {
    return await this.prisma.rental.findMany({
      where: {
        userId
      }
    })
  }

  async create(data: CreateRentalWithUserId): Promise<Rental> {
    const { carId: id, endDate, startDate } = data

    const isCarAvailable = await this.prisma.car.findFirst({
      where: {
        id,
        Rental: {
          none: {
            AND: [
              {
                OR: [
                  {
                    startDate: {
                      lte: startDate
                    }
                  },
                  {
                    startDate: {
                      lte: endDate
                    }
                  }
                ]
              },
              {
                OR: [
                  {
                    endDate: {
                      gte: endDate
                    }
                  },
                  {
                    endDate: {
                      gte: startDate
                    }
                  }
                ]
              }
            ]
          }
        }
      }
    })

    if (!isCarAvailable) {
      throw new ConflictException('Car is not available in the specified date')
    }

    return await this.prisma.rental.create({ data })
  }
}
