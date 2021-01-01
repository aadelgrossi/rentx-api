import { Prisma } from '@prisma/client'

export const honda: Prisma.CarCreateInput = {
  model: 'Accord',
  manufacturer: {
    connectOrCreate: {
      create: {
        name: 'Honda'
      },
      where: {
        name: 'Honda'
      }
    }
  },
  dailyRate: 749,
  photo: {
    create: {
      url:
        'https://res.cloudinary.com/andre-grossi/image/upload/v1609467000/rentx/honda_accord_n5gqpg.png'
    }
  },
  specifications: {
    create: [
      {
        specification: {
          connect: {
            name: 'FuelType'
          }
        },
        value: 'hybrid'
      },
      {
        specification: {
          connect: {
            name: 'Transmission'
          }
        },
        value: 'auto'
      },
      {
        specification: {
          connect: {
            name: 'Seats'
          }
        },
        value: '4'
      },
      {
        specification: {
          connect: {
            name: 'Acceleration'
          }
        },
        value: '5.1s'
      },
      {
        specification: {
          connect: {
            name: 'MaxSpeed'
          }
        },
        value: '200km/h'
      },
      {
        specification: {
          connect: {
            name: 'Horsepower'
          }
        },
        value: '256hp'
      }
    ]
  }
}
