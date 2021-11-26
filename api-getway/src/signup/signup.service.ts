import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class SignupService {
    async signup(signup: SignupDto) {
        //...
    }
}
