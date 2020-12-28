import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/services'

import { CreateRentalInput } from './dto/create_rental.input'
import { Rental } from './rental.model'

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

  async create(payload: CreateRentalInput): Promise<Rental> {
    return await this.prisma.rental.create({
      data: {
        carId: payload.carId,
        userId: payload.userId,
        startDate: new Date(payload.startDate),
        endDate: new Date(payload.endDate)
      }
    })
  }
}
