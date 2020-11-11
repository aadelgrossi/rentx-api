import { Module } from '@nestjs/common'
import { PasswordService } from 'src/services/password.service'
import { PrismaService } from 'src/services/prisma.service'
import { UserService } from 'src/services/user.service'

import { UserResolver } from './user.resolver'

@Module({
  providers: [UserResolver, UserService, PasswordService, PrismaService]
})
export class UserModule {}
