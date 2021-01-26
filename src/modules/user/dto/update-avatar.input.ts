import { InputType } from '@nestjs/graphql'

@InputType()
export class UpdateAvatarInput {
  url?: string
}
