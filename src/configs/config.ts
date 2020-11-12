import { Config } from './config.interface'

const config: Config = {
  nest: {
    port: 3333
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
    expiresIn: '10m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10
  }
}

export default (): Config => config
