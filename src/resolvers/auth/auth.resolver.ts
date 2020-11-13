import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { Auth } from 'src/models/auth.model'
import { Token } from 'src/models/token.model'
import { AuthService } from 'src/services/auth.service'

import { SigninInput } from './dto/signin.input'
import { SignupInput } from './dto/signup.input'

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly auth: AuthService) {}

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
}
