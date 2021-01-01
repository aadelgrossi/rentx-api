import { Prisma } from '@prisma/client'

export const bugatti: Prisma.CarCreateInput = {
  model: 'Veyron',
  manufacturer: {
    connectOrCreate: {
      create: {
        name: 'Bugatti'
      },
      where: {
        name: 'Bugatti'
      }
    }
  },
  dailyRate: 2580,
  photo: {
    create: {
      url:
        'https://res.cloudinary.com/andre-grossi/image/upload/v1608355095/rentx/bugatti.fw_nhuxj9.png'
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
        value: '2'
      },
      {
        specification: {
          connect: {
            name: 'Acceleration'
          }
        },
        value: '2.4s'
      },
      {
        specification: {
          connect: {
            name: 'MaxSpeed'
          }
        },
        value: '429km/h'
      },
      {
        specification: {
          connect: {
            name: 'Horsepower'
          }
        },
        value: '1200hp'
      }
    ]
  }
}
