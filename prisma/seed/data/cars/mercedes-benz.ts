import { Prisma } from '@prisma/client'

export const mercedesBenz: Prisma.CarCreateInput[] = [
  {
    model: 'E300',
    manufacturer: {
      connectOrCreate: {
        create: {
          name: 'Mercedes-Benz'
        },
        where: {
          name: 'Mercedes-Benz'
        }
      }
    },
    dailyRate: 798,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1608355095/rentx/mercedes.fw_gcwj2e.png'
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
          value: '4'
        },
        {
          specification: {
            connect: {
              name: 'Acceleration'
            }
          },
          value: '7.3s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '239km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '350hp'
        }
      ]
    }
  },
  {
    model: 'E350e',
    manufacturer: {
      connectOrCreate: {
        create: {
          name: 'Mercedes-Benz'
        },
        where: {
          name: 'Mercedes-Benz'
        }
      }
    },
    dailyRate: 798,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1608355095/rentx/mercedes-2.fw_zuxfpv.png'
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
          value: '6.2s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '195km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '280hp'
        }
      ]
    }
  }
]
