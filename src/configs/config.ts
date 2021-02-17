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
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true
  },
  security: {
    expiresIn: '7d',
    refreshIn: '30d',
    bcryptSaltOrRound: 10
  }
}

export default (): Config => config
