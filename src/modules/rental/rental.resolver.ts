import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { CreateRentalInput } from './dto/create_rental.input'
import { Rental } from './rental.model'
import { RentalService } from './rental.service'

@Resolver(() => Rental)
export class RentalResolver {
  constructor(private readonly rentalService: RentalService) {}

  @Mutation(() => Rental)
  async createRental(@Args('data') data: CreateRentalInput): Promise<Rental> {
    return this.rentalService.create(data)
  }
}
