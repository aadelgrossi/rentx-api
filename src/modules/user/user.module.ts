import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services'

import { PasswordService } from '../auth/services'
import { CarService } from '../car/car.service'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

@Module({
  providers: [
    UserResolver,
    UserService,
    CarService,
    PasswordService,
    PrismaService
  ]
})
export class UserModule {}
