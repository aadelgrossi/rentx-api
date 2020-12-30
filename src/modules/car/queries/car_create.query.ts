import {
  CreateManufacturerInput,
  CreatePhotoInput,
  CreateSpecificationInput
} from '../dto'

export const createPhoto = (photo: CreatePhotoInput) => ({
  create: {
    url: photo.url
  }
})

export const createSpecifications = (
  specifications: CreateSpecificationInput[]
) => ({
  create: specifications.map(spec => ({
    specification: {
      connectOrCreate: {
        where: {
          name: spec.name
        },
        create: {
          name: spec.name,
          isIconValue: spec.isIconValue,
          icon: spec.icon || spec.name.toLowerCase()
        }
      }
    },
    value: spec.value
  }))
})

export const findOrCreateManufacturer = ({
  name
}: CreateManufacturerInput) => ({
  connectOrCreate: {
    where: { name },
    create: { name }
  }
})
