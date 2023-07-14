import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';
import { serializeDTO } from './dto/serial.dto';

@Controller('serialization')
export class SerializationController {

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getdata(){
        return new serializeDTO({name:"user",passwrod:"secret"})
    }
}
