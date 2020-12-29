import { Injectable } from '@nestjs/common'
import { Car, CarWhereUniqueInput } from '@prisma/client'
import { UserInputError } from 'apollo-server-express'

import { PrismaService } from '../../services'
import {
  CreateCarInput,
  CreateManufacturerInput,
  CreatePhotoInput,
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
    photo,
    ...payload
  }: CreateCarInput): Promise<Car> {
    const requiredSpecsIncluded = specifications.filter(
      s =>
        s.name.toLowerCase() === 'transmission' ||
        s.name.toLowerCase() === 'fueltype'
    ).length

    if (requiredSpecsIncluded < 2) {
      throw new UserInputError(
        'Must include Transmission and Fuel Type specifications'
      )
    }

    return await this.prisma.car.create({
      data: {
        ...payload,
        specifications: buildSpecifications(specifications),
        manufacturer: buildManufacturer(manufacturer),
        photo: buildPhoto(photo)
      }
    })
  }
}

const buildPhoto = (photo: CreatePhotoInput) => ({
  create: {
    url: photo.url
  }
})

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
