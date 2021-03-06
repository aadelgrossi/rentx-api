import { Prisma } from '@prisma/client'

export const nameContains = (content: string) =>
  content
    ? ({
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
      } as Prisma.Enumerable<Prisma.CarWhereInput>)
    : {}
