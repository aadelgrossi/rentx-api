import {
  BadRequestException,
  ConflictException,
  Injectable
} from '@nestjs/common'
import { User, Prisma } from '@prisma/client'

import { PrismaService } from '../../services/prisma.service'
import { PasswordService } from '../auth/services/password.service'
import { ChangePasswordInput, UpdateUserInput } from './dto'

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService
  ) {}

  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput
    })
  }

  async users(params: {
    skip?: number
    take?: number
    cursor?: Prisma.UserWhereUniqueInput
    where?: Prisma.UserWhereInput
    orderBy?: Prisma.UserOrderByWithRelationInput
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    })
  }

  async updateUser(id: string, newUserData: UpdateUserInput) {
    const { email } = newUserData

    if (email) {
      const emailTaken = await this.prisma.user.findFirst({
        where: { email }
      })

      if (emailTaken) throw new ConflictException('Email is already in use')
    }

    return this.prisma.user.update({
      data: newUserData,
      where: {
        id
      }
    })
  }

  async updateAvatar(id: string, url: string) {
    return this.prisma.user.update({
      data: {
        avatar: {
          upsert: {
            update: {
              url
            },
            create: {
              url
            }
          }
        }
      },
      where: { id }
    })
  }

  async changePassword(
    userId: string,
    userPassword: string,
    changePassword: ChangePasswordInput
  ) {
    if (changePassword.oldPassword === changePassword.newPassword) {
      throw new ConflictException('New password cannot be equal to previous')
    }

    const passwordValid = await this.passwordService.validatePassword(
      changePassword.oldPassword,
      userPassword
    )

    if (!passwordValid) {
      throw new BadRequestException('Invalid password')
    }

    const hashedPassword = await this.passwordService.hashPassword(
      changePassword.newPassword
    )

    return this.prisma.user.update({
      data: {
        password: hashedPassword
      },
      where: { id: userId }
    })
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where
    })
  }
}
