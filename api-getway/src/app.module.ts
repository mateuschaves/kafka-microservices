import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SignupModule } from './signup/signup.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    SignupModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
