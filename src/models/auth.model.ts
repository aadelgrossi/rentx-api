import { ObjectType } from '@nestjs/graphql'
import { Token } from 'graphql'

import { User } from './user.model'

@ObjectType()
export class Auth extends Token {
  user: User
}
