import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { differenceInDays } from 'date-fns'

export function IsEndDateAfter(
  property: string,
  validationOptions?: ValidationOptions
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: EndDateConstraint
    })
  }
}

@ValidatorConstraint({ name: 'ValidateEndDate' })
export class EndDateConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints
    const relatedValue = args.object[relatedPropertyName]

    return relatedValue ? differenceInDays(value, relatedValue) >= 1 : true
  }

  defaultMessage(args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints
    return `${args.property} must be after ${relatedPropertyName}.`
  }
}
