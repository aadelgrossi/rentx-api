import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services'

import { RentalResolver } from './rental.resolver'
import { RentalService } from './rental.service'

@Module({
  providers: [RentalResolver, RentalService, PrismaService]
})
export class RentalModule {}
