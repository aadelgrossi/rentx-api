import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services'

import { PasswordService } from '../auth/services'
import { RentalResolver } from './rental.resolver'
import { RentalService } from './rental.service'

@Module({
  providers: [RentalResolver, RentalService, PasswordService, PrismaService]
})
export class RentalModule {}
