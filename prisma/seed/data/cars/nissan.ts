import { Prisma } from '@prisma/client'

export const nissan: Prisma.CarCreateInput[] = [
  {
    model: 'Altima',
    manufacturer: {
      connectOrCreate: {
        create: {
          name: 'Nissan'
        },
        where: {
          name: 'Nissan'
        }
      }
    },
    dailyRate: 1068,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1609467676/rentx/nissan_altima_zhuijy.png'
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
          value: 'electric'
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
          value: '6.8s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '225km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '188hp'
        }
      ]
    }
  },
  {
    model: 'Sentra',
    manufacturer: {
      connectOrCreate: {
        create: {
          name: 'Nissan'
        },
        where: {
          name: 'Nissan'
        }
      }
    },
    dailyRate: 1039,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1609467676/rentx/nissan_sentra_cl9f8f.png'
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
          value: '5'
        },
        {
          specification: {
            connect: {
              name: 'Acceleration'
            }
          },
          value: '9.9s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '186km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '140hp'
        }
      ]
    }
  }
]
