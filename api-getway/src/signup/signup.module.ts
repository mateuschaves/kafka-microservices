import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupResolver } from './signup.resolver';

@Module({
  providers: [SignupService, SignupResolver]
})
export class SignupModule {}
