import { Controller, Get } from '@nestjs/common';
import {BasicApiService} from './basic-api.service'

@Controller('basic-api')
export class BasicApiController {
    constructor(private basicapiservice:BasicApiService){

    }

    @Get('hello')
    hello(){
        return this.basicapiservice.hello()
    }
}
