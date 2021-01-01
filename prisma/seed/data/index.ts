import { Prisma } from '@prisma/client'

import {
  astonMartin,
  audi,
  bmw,
  bugatti,
  chevrolet,
  ford,
  honda,
  jaguar,
  lamborghini,
  lexus,
  maserati,
  mazda,
  mercedesBenz,
  mitsubishi,
  nissan,
  porsche,
  tesla,
  toyota,
  volkswagen
} from './cars'
export * from './specifications'
export * from './user'

export const carsData: Prisma.CarCreateInput[] = [
  astonMartin,
  ...audi,
  ...bmw,
  bugatti,
  chevrolet,
  ...ford,
  honda,
  jaguar,
  lamborghini,
  lexus,
  maserati,
  mazda,
  ...mercedesBenz,
  mitsubishi,
  ...nissan,
  porsche,
  tesla,
  toyota,
  ...volkswagen
]
