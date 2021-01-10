import { Prisma } from '@prisma/client'
import { subDays } from 'date-fns'

const today = new Date()

export const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Jeff Bezos',
    email: 'jeff@amazon.com',
    password: '$2b$10$33QZq3.BfwSPXIYB.2Ez3Ox1S4b0aVz1l3yT/2Q.POO1uENe8h9y.', // bezostoall
    avatar: {
      create: {
        url:
          'https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg'
      }
    },
    createdAt: subDays(today, 403)
  },
  {
    name: 'Elon Musk',
    email: 'elon@spacex.com',
    password: '$2b$10$YtdkedOPaswmcGQBp9AW..GRO1nPd9djlm9sgyME.ZHRq.atvK2n6', // teslarocks
    avatar: {
      create: {
        url: 'https://imagens.canaltech.com.br/celebridades/18.400.jpg'
      }
    },
    createdAt: subDays(today, 268)
  },
  {
    name: 'Dua Lipa',
    email: 'futurenostalgia@gmail.com',
    password: '$2b$10$Z3UJ0kKW1nlDHTBGGRke5./8Ts1Zw9E7Dm6pYKYSDILrYowCR2PAe', // breakmycar
    avatar: {
      create: {
        url:
          'https://www.pausaparafeminices.com/pausawp/wp-content/uploads/2017/11/Dua-Lipa-1.jpg'
      }
    },
    createdAt: subDays(today, 367)
  },
  {
    name: 'Reed Hastings',
    email: 'theboss@netflix.com',
    password: '$2b$10$ju5NBBra92K4ryjxX2CdsO3QDWH6xQlStKMhGssJ4/tGEK2kxFezm', // netflixandchill
    avatar: {
      create: {
        url: 'https://notednames.com/ImgProfile/lo@m_Reed%20Hastings.jpg'
      }
    },
    createdAt: subDays(today, 285)
  }
]
