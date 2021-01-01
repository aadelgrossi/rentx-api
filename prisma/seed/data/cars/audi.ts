import { Prisma } from '@prisma/client'

export const audi: Prisma.CarCreateInput[] = [
  {
    model: 'TT Coupé',
    manufacturer: {
      connectOrCreate: {
        where: {
          name: 'Audi'
        },
        create: {
          name: 'Audi'
        }
      }
    },
    dailyRate: 656,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1608355094/rentx/audi-black.fw_coc7fu.png'
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
          value: '3.7s'
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
          value: '400hp'
        }
      ]
    }
  },
  {
    model: 'A6',
    manufacturer: {
      connectOrCreate: {
        where: {
          name: 'Audi'
        },
        create: {
          name: 'Audi'
        }
      }
    },
    dailyRate: 898,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1608355094/rentx/audi-yellow.fw_vggpuc.png'
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
          value: '5.9s'
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
          value: '340hp'
        }
      ]
    }
  },
  {
    model: 'A7',
    manufacturer: {
      connectOrCreate: {
        where: {
          name: 'Audi'
        },
        create: {
          name: 'Audi'
        }
      }
    },
    dailyRate: 865,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1608355094/rentx/audi-black.fw_coc7fu.png'
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
          value: '5.3s'
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
          value: '340hp'
        }
      ]
    }
  },
  {
    model: 'Q9',
    manufacturer: {
      connectOrCreate: {
        create: {
          name: 'Audi'
        },
        where: {
          name: 'Audi'
        }
      }
    },
    dailyRate: 865,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1608355094/rentx/audi-q9_lhjtmw.png'
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
          value: '5.9s'
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
          value: '335hp'
        }
      ]
    }
  }
]
