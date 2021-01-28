import { Prisma } from '@prisma/client'

export const carsData: Prisma.CarCreateInput[] = [
  {
    model: 'DB9',
    manufacturer: {
      connect: {
        name: 'Aston Martin'
      }
    },
    dailyRate: 721,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1608355094/rentx/aston_martin_qlnsdx.png'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '4 pessoas'
        },
        {
          specification: {
            connect: {
              name: 'Acceleration'
            }
          },
          value: '4.6s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '295km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '510hp'
        }
      ]
    }
  },
  {
    model: 'TT Coupé',
    manufacturer: {
      connect: {
        name: 'Audi'
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
          value: 'Manual'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '4 pessoas'
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
      connect: {
        name: 'Audi'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '5 pessoas'
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
      connect: {
        name: 'Audi'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '4 pessoas'
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
      connect: {
        name: 'Audi'
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
          value: 'Manual'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '5 pessoas'
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
  },
  {
    model: 'Series 5',
    manufacturer: {
      connect: {
        name: 'BMW'
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
          value: 'Manual'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '4 pessoas'
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
      connect: {
        name: 'BMW'
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
          value: 'Manual'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '2 pessoas'
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
  },
  {
    model: 'Veyron',
    manufacturer: {
      connect: {
        name: 'Bugatti'
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
          value: 'Manual'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '2 pessoas'
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
  },
  {
    model: 'Corvette',
    manufacturer: {
      connect: {
        name: 'Chevrolet'
      }
    },
    dailyRate: 1674,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1608355094/rentx/corvette.fw_jodxro.png'
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
          value: 'Manual'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '2 pessoas'
        },
        {
          specification: {
            connect: {
              name: 'Acceleration'
            }
          },
          value: '2.8s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '312km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '495hp'
        }
      ]
    }
  },
  {
    model: 'Fusion',
    manufacturer: {
      connect: {
        name: 'Ford'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '4 pessoas'
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
      connect: {
        name: 'Ford'
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
          value: 'Manual'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '4 pessoas'
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
  },
  {
    model: 'Accord',
    manufacturer: {
      connect: {
        name: 'Honda'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '4 pessoas'
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
  },
  {
    model: 'F-Pace',
    manufacturer: {
      connect: {
        name: 'Jaguar'
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
          value: 'Manual'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '5 pessoas'
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
  },
  {
    model: 'Huracan EVO',
    manufacturer: {
      connect: {
        name: 'Lamborghini'
      }
    },
    dailyRate: 1845,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1608355095/rentx/lamborghini.fw_ctoafp.png'
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
          value: 'Manual'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '2 pessoas'
        },
        {
          specification: {
            connect: {
              name: 'Acceleration'
            }
          },
          value: '2.9s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '325km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '645hp'
        }
      ]
    }
  },
  {
    model: 'RC 350',
    manufacturer: {
      connect: {
        name: 'Lexus'
      }
    },
    dailyRate: 1290,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1609467262/rentx/lexus_rc_350_ud0zdz.png'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '2 pessoas'
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
          value: '311hp'
        }
      ]
    }
  },
  {
    model: 'Levante',
    manufacturer: {
      connect: {
        name: 'Maserati'
      }
    },
    dailyRate: 1678,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1608355095/rentx/maserati.fw_d6mogb.png'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '4 pessoas'
        },
        {
          specification: {
            connect: {
              name: 'Acceleration'
            }
          },
          value: '5.6s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '286km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '580hp'
        }
      ]
    }
  },
  {
    model: 'MX-5',
    manufacturer: {
      connect: {
        name: 'Mazda'
      }
    },
    dailyRate: 1217,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1609467262/rentx/mazda_mx5_yecjdd.png'
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
          value: 'Manual'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '2 pessoas'
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
          value: '217km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '181hp'
        }
      ]
    }
  },
  {
    model: 'E300',
    manufacturer: {
      connect: {
        name: 'Mercedes-Benz'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '4 pessoas'
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
      connect: {
        name: 'Mercedes-Benz'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '5 pessoas'
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
  },
  {
    model: 'Eclipse Cross',
    manufacturer: {
      connect: {
        name: 'Mitsubishi'
      }
    },
    dailyRate: 978,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1609467676/rentx/mitsubishi_eclipse_cross_ujjgsu.png'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '5 pessoas'
        },
        {
          specification: {
            connect: {
              name: 'Acceleration'
            }
          },
          value: '7.0s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '214km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '152hp'
        }
      ]
    }
  },
  {
    model: 'Altima',
    manufacturer: {
      connect: {
        name: 'Nissan'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '5 pessoas'
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
      connect: {
        name: 'Nissan'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '5 pessoas'
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
  },
  {
    model: '911 Carrera',
    manufacturer: {
      connect: {
        name: 'Porsche'
      }
    },
    dailyRate: 1122,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1608355095/rentx/porsche.fw_vnh7h1.png'
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
          value: 'Manual'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '2 pessoas'
        },
        {
          specification: {
            connect: {
              name: 'Acceleration'
            }
          },
          value: '4.2s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '306km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '379hp'
        }
      ]
    }
  },
  {
    model: 'Model S',
    manufacturer: {
      connect: {
        name: 'Tesla'
      }
    },
    dailyRate: 995,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1609466589/rentx/tesla_model_s_t6bsoc.png'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '4 pessoas'
        },
        {
          specification: {
            connect: {
              name: 'Acceleration'
            }
          },
          value: '3.2s'
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
          value: '518hp'
        }
      ]
    }
  },
  {
    model: 'Prius',
    manufacturer: {
      connect: {
        name: 'Toyota'
      }
    },
    dailyRate: 320,
    photo: {
      create: {
        url:
          'https://res.cloudinary.com/andre-grossi/image/upload/v1609466570/rentx/toyota_prius_g4dqnc.png'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '5 pessoas'
        },
        {
          specification: {
            connect: {
              name: 'Acceleration'
            }
          },
          value: '10.3s'
        },
        {
          specification: {
            connect: {
              name: 'MaxSpeed'
            }
          },
          value: '165km/h'
        },
        {
          specification: {
            connect: {
              name: 'Horsepower'
            }
          },
          value: '122hp'
        }
      ]
    }
  },
  {
    model: 'Arteon',
    manufacturer: {
      connect: {
        name: 'Volkswagen'
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
          value: 'Automático'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '5 pessoas'
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
      connect: {
        name: 'Volkswagen'
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
          value: 'Manual'
        },
        {
          specification: {
            connect: {
              name: 'Seats'
            }
          },
          value: '5 pessoas'
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
