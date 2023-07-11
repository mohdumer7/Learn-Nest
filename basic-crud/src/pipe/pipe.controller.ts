import { Body, Controller, ParseIntPipe, Post, UseFilters, UsePipes } from '@nestjs/common';
import { CustomPipeService } from 'src/custom-pipe/custom-pipe.service';
import { exceptionFilter } from 'src/exception-filter/exceptionFilter';
import { pipeDTO } from './dto/pipe.dto';
import { validate } from 'class-validator';
import { ClassValidatePipeService } from 'src/class-validate-pipe/class-validate-pipe.service';
import { joiDTO, joiSchema } from './dto/joi.pipe.dto';
import Joi from 'joi';
import { JoiValidatePipeService } from 'src/joi-validate-pipe/joi-validate-pipe.service';

@Controller('pipe')
// @UseFilters(exceptionFilter)
export class PipeController {

    @Post('')
    parsePipe(@Body('number',new ParseIntPipe({errorHttpStatusCode:500})) num:number){
        console.log(num)
        return num
    }

    @Post('custom-pipe')
    customPipe(@Body('number',CustomPipeService) num:number){
        console.log(num)
        return 'This is a custom Pipe'
    }

    @Post('class-validator')
    classValidator(@Body(new ClassValidatePipeService()) value:pipeDTO){
        console.log(value)
        return 'Your data is valid'
    }

    @Post('joi-validator')
    @UsePipes(new JoiValidatePipeService(joiSchema))
    joiValidator(@Body() data:joiDTO){
        return 'your data is valid'
    }

    
}
