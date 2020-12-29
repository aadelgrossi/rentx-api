import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'

import { CarService } from './car.service'
import { CarResolver, CarSpecificationResolver } from './resolvers'

@Module({
  providers: [PrismaService, CarResolver, CarSpecificationResolver, CarService]
})
export class CarModule {}
