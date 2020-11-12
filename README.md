# rentX

GraphQL API/server module for rentX application.

Developed with

- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- [Prisma] (https://www.prisma.io/)
- [PassportJS](http://www.passportjs.org/)

## Installation

Rename .env.example to .env and update to your environment variables (your DB config, default is Postgres / random string/hash for JWT_SECRET)
```bash
$ mv .env.example .env
```

Install dependencies
```bash
$ yarn
```

Run migrations and generate Prisma client
```bash
$ yarn prisma:apply
```

## Running the app

```
$ yarn start:dev
```

## License
[MIT](LICENSE)
