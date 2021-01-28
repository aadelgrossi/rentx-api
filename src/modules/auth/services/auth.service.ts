/* eslint-disable dot-notation */
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { Prisma } from '@prisma/client'
import { SecurityConfig } from 'src/configs/config.interface'
import { PrismaService } from 'src/services'

import { User } from '../../user/models'
import { SigninInput, SignupInput } from '../dto'
import { Token } from '../models'
import { PasswordService } from './password.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService
  ) {}

  async createUser(payload: SignupInput): Promise<Token> {
    const hashedPassword = await this.passwordService.hashPassword(
      payload.password
    )

    try {
      const user = await this.prisma.user.create({
        data: {
          ...payload,
          password: hashedPassword
        }
      })

      return this.generateToken({
        userId: user.id
      })
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(`Email ${payload.email} already in use.`)
      } else {
        throw new Error(error)
      }
    }
  }

  async login({ email, password }: SigninInput): Promise<Token> {
    const user = await this.prisma.user.findUnique({ where: { email } })

    if (!user) {
      throw new NotFoundException(`No user found with email ${email}`)
    }

    const passwordValid = await this.passwordService.validatePassword(
      password,
      user.password
    )

    if (!passwordValid) {
      throw new BadRequestException('Invalid passowrd')
    }

    return this.generateToken({
      userId: user.id
    })
  }

  validateUser(userId: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: userId } })
  }

  getUserFromToken(token: string): Promise<User> {
    const id = this.jwtService.decode(token)['userId']
    return this.prisma.user.findUnique({ where: { id } })
  }

  generateToken(payload: Record<string, unknown>): Token {
    const accessToken = this.jwtService.sign(payload)

    const securityConfig = this.configService.get<SecurityConfig>('security')
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: securityConfig.refreshIn
    })

    return {
      accessToken,
      refreshToken
    }
  }

  refreshToken(token: string) {
    try {
      const { userId } = this.jwtService.verify(token)

      return this.generateToken({
        userId
      })
    } catch (error) {
      throw new UnauthorizedException()
    }
  }
}
