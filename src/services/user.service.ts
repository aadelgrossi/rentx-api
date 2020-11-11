import { BadRequestException, Injectable } from '@nestjs/common'
import {
  User,
  UserCreateInput,
  UserOrderByInput,
  UserWhereInput,
  UserWhereUniqueInput
} from '@prisma/client'
import { ChangePasswordInput } from 'src/resolvers/user/dto/change-password.input'
import { UpdateUserInput } from 'src/resolvers/user/dto/update-user.input'

import { PasswordService } from './password.service'
import { PrismaService } from './prisma.service'

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

  async createUser(data: UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data
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
