import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'

import { CarService } from '../../services/car.service'
import { CarResolver } from './car.resolver'

@Module({
  providers: [PrismaService, CarResolver, CarService]
})
export class CarModule {}
