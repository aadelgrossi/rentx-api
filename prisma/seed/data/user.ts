import { Prisma } from '@prisma/client'

export const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Jeff Bezos',
    email: 'bezos@amazon.com',
    password: '$2y$10$xygCjygFaC8HI44RBh0zAuKC.aw3jRqh7RjYme6TaY4H51shK665e', // bezostoall
    avatar: {
      create: {
        url:
          'https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg'
      }
    },
    createdAt: '2019-10-03 17:45:16.551'
  },
  {
    name: 'Elon Musk',
    email: 'elon@spacex.com',
    password: '$2y$10$Rt5Kbn5EaNhUci5e7x/2peT.5Dc6IhAOpyU0vvaCpLNnsg/elhi0K', // teslarocks
    avatar: {
      create: {
        url: 'https://imagens.canaltech.com.br/celebridades/18.400.jpg'
      }
    },
    createdAt: '2020-07-12 05:46:16.551'
  },
  {
    name: 'Dua Lipa',
    email: 'futurenostalgia@gmail.com',
    password: '$2y$10$c9cl0qOmgNPBrCF6WdNk7OXhPJU.Xh92gbDO70AAqYGS9e4YJB2am', // breakmycar
    avatar: {
      create: {
        url:
          'https://www.pausaparafeminices.com/pausawp/wp-content/uploads/2017/11/Dua-Lipa-1.jpg'
      }
    },
    createdAt: '2020-01-22 10:07:16.551'
  },
  {
    name: 'Reed Hastings',
    email: 'theboss@netflix.com',
    password: '$2y$10$rFQA4GC3dmstfJJOJwloVuzg/7iwen6FkJENlLu868NjesQu/B1HO ', // netflixandchill
    avatar: {
      create: {
        url: 'https://notednames.com/ImgProfile/lo@m_Reed%20Hastings.jpg'
      }
    },
    createdAt: '2018-09-15 20:56:16.551'
  }
]
