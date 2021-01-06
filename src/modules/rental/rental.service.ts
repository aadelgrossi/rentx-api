import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/services'

import { availableBetween } from '../car/queries/where'
import { CreateRentalInput } from './dto/create_rental.input'
import { Rental } from './rental.model'

interface CreateRentalForUser extends CreateRentalInput {
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

  async create(data: CreateRentalForUser): Promise<Rental> {
    const { carId: id, startDate: fromDate, endDate: toDate } = data

    const isCarAvailable = await this.prisma.car.findFirst({
      where: {
        id,
        ...availableBetween({ fromDate, toDate })
      }
    })

    if (!isCarAvailable) {
      throw new ConflictException('Car is not available in the specified date')
    }

    return await this.prisma.rental.create({ data })
  }
}
