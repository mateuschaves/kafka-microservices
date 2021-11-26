import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType('Signup')
export class SignupType {
    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;
}