import { Prisma } from '@prisma/client'

export const volkswagen: Prisma.CarCreateInput[] = [
  {
    model: 'Arteon',
    manufacturer: {
      connectOrCreate: {
        create: {
          name: 'Volkswagen'
        },
        where: {
          name: 'Volkswagen'
        }
      }
    },
    dailyRate: 1145,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1609468158/rentx/volks_arteon_sc7q4m.png'
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
          value: 'auto'
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
          value: '6.3s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '249km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '268hp'
        }
      ]
    }
  },
  {
    model: 'Passat CC',
    manufacturer: {
      connectOrCreate: {
        create: {
          name: 'Volkswagen'
        },
        where: {
          name: 'Volkswagen'
        }
      }
    },
    dailyRate: 981,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1609468158/rentx/volks_cc_xhp8pp.png'
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
          value: '8.2s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '222km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '200hp'
        }
      ]
    }
  }
]
