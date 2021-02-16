import { Config } from './config.interface'

const config: Config = {
  nest: {
    port: Number(process.env.PORT) || 3333
  },
  cors: {
    enabled: true
  },
  graphql: {
    playgroundEnabled: true,
    introspection: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true
  },
  security: {
    expiresIn: '30d',
    refreshIn: '7d',
    bcryptSaltOrRound: 10
  }
}

export default (): Config => config
