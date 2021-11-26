import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { SignupType } from './signup.type';
import { SignupService } from './signup.service';
import { SignupDto } from './dto/signup.dto';
import {  } from '@nestjs/common';

@Resolver(of => SignupType)
export class SignupResolver {
    constructor(
        private signupService: SignupService
    ) {}

    @Mutation(returns => SignupType)
    signup(
        @Args('signupDto') signupDto: SignupDto
    ) {
        return this.signupService.signup(signupDto);
    }

    @Query(() => String)
    sayHello() {
        return 'Hello World !'
    }
}
