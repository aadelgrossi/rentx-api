import { InputType } from '@nestjs/graphql'
import { IsNotEmpty, MinLength } from 'class-validator'

@InputType()
export class ChangePasswordInput {
  @IsNotEmpty()
  @MinLength(8)
  oldPassword: string

  @IsNotEmpty()
  @MinLength(8)
  newPassword: string
}
