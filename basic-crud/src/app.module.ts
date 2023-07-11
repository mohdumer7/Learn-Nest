import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CrudModule } from './crud/crud.module';
import { logger } from './middleware/logger.middleware';
import { CrudController } from './crud/crud.controller';
import { CustomExceptionModule } from './custom-exception/custom-exception.module';
import { PipeModule } from './pipe/pipe.module';

// import cors from 'cors';

@Module({
  imports: [CrudModule, CustomExceptionModule, PipeModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    //Middlewares can handle either a string of route, object and even the whole controller
    //exclude helps in excluding the routes from middleware implementation
    consumer.apply(logger).exclude({path:'crud',method:RequestMethod.GET}).forRoutes({path:'crud',method:RequestMethod.ALL},CrudController)
}
}
