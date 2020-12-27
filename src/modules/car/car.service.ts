import { Injectable } from '@nestjs/common'
import { Car, CarWhereUniqueInput } from '@prisma/client'

import { PrismaService } from '../../services'
import { CreateCarInput } from './dto'

@Injectable()
export class CarService {
  constructor(private readonly prisma: PrismaService) {}

  async car(carWhereUniqueInput: CarWhereUniqueInput): Promise<Car> {
    return this.prisma.car.findOne({
      where: carWhereUniqueInput,
      include: {
        manufacturer: true,
        photo: true
      }
    })
  }

  async cars(): Promise<Car[]> {
    return this.prisma.car.findMany({
      include: {
        manufacturer: true,
        photo: true
      }
    })
  }

  async createCar(data: CreateCarInput): Promise<Car> {
    return await this.prisma.car.create({
      data: {
        ...data,
        specifications: {
          create: data.specifications.map(spec => ({
            name: spec.name,
            value: spec.value
          }))
        },
        manufacturer: {
          connectOrCreate: {
            where: { name: data.manufacturer.name },
            create: { name: data.manufacturer.name }
          }
        },
        photo: {
          create: {
            url: data.photo.url
          }
        }
      }
    })
  }
}
