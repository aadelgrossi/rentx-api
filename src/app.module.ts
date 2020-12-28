import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'

import { DateScalar } from './common/date.scalar'
import config from './configs/config'
import { GraphqlConfig } from './configs/config.interface'
import { AuthModule, CarModule, UserModule, RentalModule } from './modules'
import { AppService } from './services'

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
    AuthModule,
    CarModule,
    RentalModule
  ],
  providers: [AppService, DateScalar]
})
export class AppModule {}
