import { BadRequestException, Injectable } from '@nestjs/common'
import {
  User,
  UserOrderByInput,
  UserWhereInput,
  UserWhereUniqueInput
} from '@prisma/client'

import { PrismaService } from '../../services/prisma.service'
import { PasswordService } from '../auth/services/password.service'
import { ChangePasswordInput, UpdateUserInput } from './dto'

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService
  ) {}

  async user(userWhereUniqueInput: UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.findOne({
      where: userWhereUniqueInput
    })
  }

  async users(params: {
    skip?: number
    take?: number
    cursor?: UserWhereUniqueInput
    where?: UserWhereInput
    orderBy?: UserOrderByInput
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

  async updateUser(userId: string, newUserData: UpdateUserInput) {
    return this.prisma.user.update({
      data: newUserData,
      where: {
        id: userId
      }
    })
  }

  async changePassword(
    userId: string,
    userPassword: string,
    changePassword: ChangePasswordInput
  ) {
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

  async deleteUser(where: UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where
    })
  }
}
