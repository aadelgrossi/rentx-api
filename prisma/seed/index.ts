import { PrismaClient } from '@prisma/client'
import { format } from 'date-fns'
import * as dotenv from 'dotenv'

import {
  userData,
  specificationsData,
  carsData,
  rentalsData,
  manufacturersData
} from './data'

const prisma = new PrismaClient()

const seedUsers = async () => {
  console.log('Seeding USERS...')

  await Promise.all(
    userData.map(async user => {
      await prisma.user.create({
        data: user
      })
      console.log(`---> ${user.name} ✔️`)
    })
  )
}

const seedManufacturers = async () => {
  console.log('\n\nSeeding MANUFACTURERS...')

  await Promise.all(
    manufacturersData.map(async manufacturer => {
      await prisma.carManufacturer.create({
        data: manufacturer
      })
      console.log(`---> ${manufacturer.name}`)
    })
  )
}

const seedSpecifications = async () => {
  console.log('\n\nSeeding SPECIFICATIONS...')

  return Promise.all(
    specificationsData.map(async specification => {
      await prisma.specification.create({
        data: specification
      })
      console.log(`---> ${specification.name} ✔️`)
    })
  )
}

const seedCars = async () => {
  console.log('\n\nSeeding CARS...')

  return Promise.all(
    carsData.map(async car => {
      await prisma.car.create({
        data: car
      })
      console.log(`---> ${car.manufacturer.connect.name} ${car.model} ✔️`)
    })
  )
}

const seedRentals = async () => {
  console.log('\n\nSeeding RENTALS...')

  const cars = await prisma.car.findMany({
    include: { manufacturer: true },
    take: 10
  })
  const users = await prisma.user.findMany({ take: 4 })

  return Promise.all(
    rentalsData.map(async rental => {
      const user = users[Math.floor(Math.random() * 3)]
      const car = cars[Math.floor(Math.random() * 9)]

      await prisma.rental.create({
        data: {
          user: {
            connect: {
              id: user.id
            }
          },
          car: {
            connect: {
              id: car.id
            }
          },
          ...rental
        }
      })
      console.log(
        `---> ${user.name} | ${car.manufacturer.name} ${
          car.model
        } FROM ${format(rental.startDate as Date, 'MMM, do yyyy')} TO ${format(
          rental.endDate as Date,
          'MMM, do yyyy'
        )} ✔️`
      )
    })
  )
}

const main = async () => {
  dotenv.config()

  await seedUsers()
  await seedManufacturers()
  await seedSpecifications()
  await seedCars()
  await seedRentals()
}

main()
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
