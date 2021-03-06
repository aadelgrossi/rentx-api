# rentX (API)

GraphQL API/server module for rentX application.   

Check the mobile app repo [here](https://github.com/aadelgrossi/rentx-mobile).

Developed using

- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- [Prisma](https://www.prisma.io/)
- [PassportJS](http://www.passportjs.org/)

## :wrench: Install & config steps

```bash
$ git clone https://github.com/aadelgrossi/rentx-api.git
```

### Rename [.env.example](./.env.example) to .env and u
```bash
$ mv .env.example .env
```

### Update the environment variables to match your PG instance config (example is previously filled with defaults)
```env
POSTGRES_USER=postgres  
POSTGRES_PASSWORD=postgres  
POSTGRES_DB=rentx  

DB_HOST=localhost
DB_PORT=5432
DB_SCHEMA=public
```

### Install dependencies, generate Prisma client and build 

```bash
$ yarn install
```
### Run migrations
```bash
$ yarn prisma:migrate
```

### Seed database (optional)
```bash
$ yarn seed
```
# :arrow_forward: Start the server

```bash
$ yarn start:dev
```

GraphQL playground will be available at http://localhost:3333/graphql

## License
[MIT](LICENSE)
