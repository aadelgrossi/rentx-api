import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'

import { CarService } from './car.service'
import { CarResolver, CarSpecificationResolver } from './resolvers'
import { FavoriteCarResolver } from './resolvers/favorite_car.resolver'

@Module({
  providers: [
    PrismaService,
    CarResolver,
    FavoriteCarResolver,
    CarSpecificationResolver,
    CarService
  ]
})
export class CarModule {}
