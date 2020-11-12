import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'

import config from './configs/config'
import { GraphqlConfig } from './configs/config.interface'
import { AppController } from './controllers/app.controller'
import { AppResolver } from './resolvers/app.resolver'
import { AuthModule } from './resolvers/auth/auth.module'
import { UserModule } from './resolvers/user/user.module'
import { AppService } from './services/app.service'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql')
        return {
          buildSchemaOptions: {
            numberScalarMode: 'integer'
          },
          sortSchema: graphqlConfig.sortSchema,
          autoSchemaFile:
            graphqlConfig.schemaDestination || './src/schema.graphql',
          debug: graphqlConfig.debug,
          playground: graphqlConfig.playgroundEnabled,
          context: ({ req }) => ({ req })
        }
      },
      inject: [ConfigService]
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver]
})
export class AppModule {}
