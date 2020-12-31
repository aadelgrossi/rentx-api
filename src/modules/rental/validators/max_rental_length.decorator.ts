import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { addDays, isBefore } from 'date-fns'

import { CreateRentalInput } from '../dto'

export function IsValidMaxDate(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: ['startDate'],
      validator: MaxDaysConstraint
    })
  }
}

@ValidatorConstraint({ name: 'ValidateMaxDays' })
export class MaxDaysConstraint implements ValidatorConstraintInterface {
  private readonly maxDays = 60

  validate(value: any, args: ValidationArguments) {
    const { startDate } = args.object as CreateRentalInput
    return isBefore(value, addDays(startDate, this.maxDays))
  }

  defaultMessage() {
    return `Invalid end date. Maximum rental length is ${this.maxDays} days.`
  }
}
