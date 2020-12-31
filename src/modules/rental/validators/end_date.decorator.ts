import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { differenceInDays } from 'date-fns'

import { CreateRentalInput } from '../dto/create_rental.input'

export function IsEndDateAfterStartDate(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: ['startDate'],
      validator: EndDateConstraint
    })
  }
}

@ValidatorConstraint({ name: 'ValidateEndDate' })
export class EndDateConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const { startDate } = args.object as CreateRentalInput
    return differenceInDays(value, startDate) >= 1
  }

  defaultMessage(args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints
    return `${args.property} must be after ${relatedPropertyName}.`
  }
}
