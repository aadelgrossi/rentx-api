import { Prisma } from '@prisma/client'

export const bmw: Prisma.CarCreateInput[] = [
  {
    model: 'Series 5',
    manufacturer: {
      connectOrCreate: {
        create: {
          name: 'BMW'
        },
        where: {
          name: 'BMW'
        }
      }
    },
    dailyRate: 1089,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1609466644/rentx/bmw_series_5_jxqugu.png'
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
          value: '4.8s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '270km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '600hp'
        }
      ]
    }
  },
  {
    model: 'Z4 Roadster',
    manufacturer: {
      connectOrCreate: {
        create: {
          name: 'BMW'
        },
        where: {
          name: 'BMW'
        }
      }
    },
    dailyRate: 1200,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1609466646/rentx/bmw_z4_ld3sjt.png'
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
          value: '4.1s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '270km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '340hp'
        }
      ]
    }
  }
]
