import { Prisma } from '@prisma/client'

export const jaguar: Prisma.CarCreateInput = {
  model: 'F-Pace',
  manufacturer: {
    connectOrCreate: {
      create: {
        name: 'Jaguar'
      },
      where: {
        name: 'Jaguar'
      }
    }
  },
  dailyRate: 749,
  photo: {
    create: {
      url:
        'https://res.cloudinary.com/andre-grossi/image/upload/v1609467000/rentx/jaguar_f-pace_cftwg8.png'
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
        value: 'gas'
      },
      {
        specification: {
          connect: {
            name: 'Transmission'
          }
        },
        value: 'manual'
      },
      {
        specification: {
          connect: {
            name: 'Seats'
          }
        },
        value: '5'
      },
      {
        specification: {
          connect: {
            name: 'Acceleration'
          }
        },
        value: '7.5s'
      },
      {
        specification: {
          connect: {
            name: 'MaxSpeed'
          }
        },
        value: '215km/h'
      },
      {
        specification: {
          connect: {
            name: 'Horsepower'
          }
        },
        value: '487hp'
      }
    ]
  }
}
