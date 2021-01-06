import { Injectable } from '@nestjs/common'
import { Prisma, PrismaClientKnownRequestError } from '@prisma/client'
import { UserInputError, ValidationError } from 'apollo-server-express'
import { differenceInDays } from 'date-fns'

import { PrismaService } from '../../services'
import { CreateCarInput, CarFilterArgs } from './dto'
import { BaseSpecs, Car } from './models'
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

  async car(carWhereUniqueInput: Prisma.CarWhereUniqueInput): Promise<Car> {
    return this.prisma.car.findUnique({
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
  }: CreateCarInput): Promise<Car> {
    const specNames = specifications.map(s => s.name)

    const requiredSpecsIncluded =
      specNames.includes(BaseSpecs.TRANSMISSION) &&
      specNames.includes(BaseSpecs.FUEL_TYPE)

    if (!requiredSpecsIncluded) {
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

  async getFavoriteCarForUser(userId: string) {
    const userRentals = await this.prisma.rental.findMany({
      where: {
        userId
      }
    })

    if (!userRentals.length) {
      return null
    }

    const rentedCarsForUser = await this.prisma.car.findMany({
      where: {
        Rental: {
          some: {
            userId
          }
        }
      },
      include: {
        manufacturer: true
      },
      distinct: 'id'
    })

    const carsGroupedByTimesRented = rentedCarsForUser.map(car => {
      const { timesRented, totalDays } = userRentals
        .filter(r => r.carId === car.id)
        .reduce(
          (acc, item) => {
            return {
              totalDays:
                acc.totalDays + differenceInDays(item.endDate, item.startDate),
              timesRented: acc.timesRented + 1
            }
          },
          { totalDays: 0, timesRented: 0 }
        )

      return { ...car, timesRented, totalDays }
    })

    const topRentedCar = carsGroupedByTimesRented.reduce(
      (top, current) => (current.totalDays > top.totalDays ? current : top),
      { totalDays: 0 }
    )

    return topRentedCar
  }
}
