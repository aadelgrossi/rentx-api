import { InputType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

@InputType()
export class SigninInput {
  @IsEmail()
  email: string

  @IsNotEmpty()
  @MinLength(8)
  password: string
}
