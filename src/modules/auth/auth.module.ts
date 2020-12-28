import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { SecurityConfig } from 'src/configs/config.interface'
import { PrismaService } from 'src/services'

import { AuthResolver } from './auth.resolver'
import { JwtStrategy } from './jwt.strategy'
import { AuthService, PasswordService } from './services'

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const securityConfig = configService.get<SecurityConfig>('security')
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: securityConfig.expiresIn
          }
        }
      },
      inject: [ConfigService]
    })
  ],
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy,
    PasswordService,
    PrismaService
  ]
})
export class AuthModule {}
