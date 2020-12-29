import { Injectable } from '@nestjs/common'
import { Car, CarWhereUniqueInput } from '@prisma/client'

import { PrismaService } from '../../services'
import {
  CreateCarInput,
  CreateManufacturerInput,
  CreateSpecificationInput
} from './dto'

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
        photo: true,
        specifications: true
      }
    })
  }

  async createCar({
    manufacturer,
    specifications,
    model,
    photo,
    ...payload
  }: CreateCarInput): Promise<Car> {
    return await this.prisma.car.create({
      data: {
        ...payload,
        model,
        specifications: buildSpecifications(specifications),
        manufacturer: buildManufacturer(manufacturer),
        photo: {
          create: {
            url: photo.url
          }
        }
      }
    })
  }
}
const buildSpecifications = (specifications: CreateSpecificationInput[]) => ({
  create: specifications.map(spec => ({
    specification: {
      connectOrCreate: {
        where: {
          name: spec.name
        },
        create: {
          name: spec.name,
          isIconValue: spec.isIconValue,
          icon: spec.icon || spec.name.toLowerCase()
        }
      }
    },
    value: spec.value
  }))
})

const buildManufacturer = ({ name }: CreateManufacturerInput) => ({
  connectOrCreate: {
    where: { name },
    create: { name }
  }
})
