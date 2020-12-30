import { Injectable } from '@nestjs/common'
import {
  Car,
  CarWhereUniqueInput,
  PrismaClientKnownRequestError
} from '@prisma/client'
import { UserInputError, ValidationError } from 'apollo-server-express'

import { PrismaService } from '../../services'
import {
  CreateCarInput,
  CreateManufacturerInput,
  CreatePhotoInput,
  CreateSpecificationInput
} from './dto'

interface CustomPrismaError extends PrismaClientKnownRequestError {
  meta: {
    target: Array<string>
  }
}

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
  }: CreateCarInput): Promise<Car | null> {
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

    try {
      return await this.prisma.car.create({
        data: {
          ...payload,
          specifications: buildSpecifications(specifications),
          manufacturer: buildManufacturer(manufacturer),
          photo: buildPhoto(photo)
        }
      })
    } catch (err) {
      const { meta } = err as CustomPrismaError

      if (meta.target.includes('model')) {
        throw new ValidationError(
          'The combination MANUFACTURER + MODEL must be unique'
        )
      }

      if (meta.target.includes('specificationId')) {
        throw new ValidationError(
          'Only one value per specification can be provided.'
        )
      }
    }
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
