import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

import {
  userData,
  specificationsData,
  carsData,
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

const main = async () => {
  dotenv.config()

  await seedUsers()
  await seedManufacturers()
  await seedSpecifications()
  await seedCars()
}

main()
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
