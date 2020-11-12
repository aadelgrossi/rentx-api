import { Module } from '@nestjs/common'
import { AuthService } from 'src/services/auth.service'
import { PasswordService } from 'src/services/password.service'
import { PrismaService } from 'src/services/prisma.service'

import { AuthResolver } from './auth.resolver'
import { JwtStrategy } from './jwt.strategy'

@Module({
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy,
    PasswordService,
    PrismaService
  ]
})
export class AuthModule {}
