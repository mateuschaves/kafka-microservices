import { Field, InputType } from "@nestjs/graphql";
import { MinLength, IsEmail } from 'class-validator';


@InputType()
export class SignupDto {
     
    @MinLength(1)
    @IsEmail()
    @Field()
    email: string;

    @Field()
    password: string;
}