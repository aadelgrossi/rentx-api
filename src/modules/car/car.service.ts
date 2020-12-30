import { Injectable } from '@nestjs/common'
import {
  Car,
  CarWhereUniqueInput,
  PrismaClientKnownRequestError
} from '@prisma/client'
import { UserInputError, ValidationError } from 'apollo-server-express'

import { PrismaService } from '../../services'
import { CreateCarInput, CarFilterArgs } from './dto'
import {
  buildCarFilterOptionsQuery,
  findOrCreateManufacturer,
  createPhoto,
  createSpecifications
} from './queries'

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

  async cars(options: CarFilterArgs = {}): Promise<Car[]> {
    const where = buildCarFilterOptionsQuery(options)

    return this.prisma.car.findMany({
      where,
      include: {
        manufacturer: true
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
          specifications: createSpecifications(specifications),
          manufacturer: findOrCreateManufacturer(manufacturer),
          photo: createPhoto(photo)
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
