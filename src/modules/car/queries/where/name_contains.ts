import { Prisma } from '@prisma/client'

type NameFilter = (value: string) => Prisma.CarWhereInput

export const nameContains: NameFilter = (content: string) => {
  if (!content) return {}
  return {
    OR: [
      {
        model: {
          contains: content,
          mode: 'insensitive'
        }
      },
      {
        manufacturer: {
          name: {
            contains: content,
            mode: 'insensitive'
          }
        }
      }
    ]
  }
}
