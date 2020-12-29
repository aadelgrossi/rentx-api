import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'

import { CarResolver } from './car.resolver'
import { CarService } from './car.service'
import { CarSpecificationResolver } from './car_specification.resolver'

@Module({
  providers: [PrismaService, CarResolver, CarSpecificationResolver, CarService]
})
export class CarModule {}
