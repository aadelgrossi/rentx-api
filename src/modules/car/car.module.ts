import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'

import { CarResolver } from './car.resolver'
import { CarService } from './car.service'

@Module({
  providers: [PrismaService, CarResolver, CarService]
})
export class CarModule {}
