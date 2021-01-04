import { ConflictException } from '@nestjs/common'
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
  Query
} from '@nestjs/graphql'
import { PrismaService } from 'src/services'

import { SigninInput, SignupInput } from './dto'
import { Auth, Token } from './models'
import { AuthService } from './services'

@Resolver(() => Auth)
export class AuthResolver {
  constructor(
    private readonly auth: AuthService,
    private readonly prisma: PrismaService
  ) {}

  @Mutation(() => Auth)
  async signup(@Args('data') data: SignupInput) {
    data.email = data.email.toLowerCase()
    const { accessToken, refreshToken } = await this.auth.createUser(data)
    return {
      accessToken,
      refreshToken
    }
  }

  @Mutation(() => Auth)
  async signin(@Args('data') { email, password }: SigninInput) {
    const { accessToken, refreshToken } = await this.auth.login({
      email: email.toLowerCase(),
      password
    })

    return { accessToken, refreshToken }
  }

  @Mutation(() => Token)
  async refreshToken(@Args('token') token: string) {
    return this.auth.refreshToken(token)
  }

  @ResolveField('user')
  async user(@Parent() auth: Auth) {
    return await this.auth.getUserFromToken(auth.accessToken)
  }

  @Query(() => Boolean)
  async isEmailAvailable(@Args('email') email: string) {
    const userWithEmail = await this.prisma.user.findUnique({
      where: {
        email
      }
    })

    if (userWithEmail) {
      throw new ConflictException('Email already in use')
    }

    return true
  }
}
