import { InputType, Field } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

@InputType()
export class SigninInput {
  @Field()
  @IsEmail()
  email: string

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string
}
