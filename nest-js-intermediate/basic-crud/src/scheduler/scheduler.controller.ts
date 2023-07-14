import { Controller } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Controller('scheduler')
export class SchedulerController {


    // @Cron('*/3 * * * * *')
    run(){
        console.log("Hello")
    }

}
