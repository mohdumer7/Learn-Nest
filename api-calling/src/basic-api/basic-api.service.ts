import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicApiService {
    hello(){
        return 'Hello World!'
    }
}
