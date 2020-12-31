import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { isAfter, isEqual, startOfDay } from 'date-fns'

export function MinDate(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: MinDateConstraint
    })
  }
}

@ValidatorConstraint({ name: 'ValidateStartDate' })
export class MinDateConstraint implements ValidatorConstraintInterface {
  validate(value: any, _: ValidationArguments) {
    const valueStartOfDay = startOfDay(value)
    const allowedMinDate = startOfDay(new Date())

    return (
      isAfter(valueStartOfDay, allowedMinDate) ||
      isEqual(valueStartOfDay, allowedMinDate)
    )
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} must be at least one day from today.`
  }
}
