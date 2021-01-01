import { Prisma } from '@prisma/client'

export const ford: Prisma.CarCreateInput[] = [
  {
    model: 'Fusion',
    manufacturer: {
      connectOrCreate: {
        create: {
          name: 'Ford'
        },
        where: {
          name: 'Ford'
        }
      }
    },
    dailyRate: 548,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1609466826/rentx/ford_fusion_gjntqu.png'
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
          value: '7.6s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '217km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '195hp'
        }
      ]
    }
  },
  {
    model: 'Mustang',
    manufacturer: {
      connectOrCreate: {
        create: {
          name: 'Ford'
        },
        where: {
          name: 'Ford'
        }
      }
    },
    dailyRate: 699,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1609466826/rentx/ford_mustang_uyvbol.png'
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
          value: '4'
        },
        {
          specification: {
            connect: {
              name: 'Acceleration'
            }
          },
          value: '4.3s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '250km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '466hp'
        }
      ]
    }
  }
]
