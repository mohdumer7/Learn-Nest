import { Controller, ForbiddenException, Get, UseFilters } from '@nestjs/common';
import { exceptionFilter } from 'src/exception-filter/exceptionFilter';

@Controller('')
@UseFilters(new exceptionFilter())
export class CustomExceptionController {
    @Get('custom-error')
    customError(){
        throw new ForbiddenException()
    }

    
}
