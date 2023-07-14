import { Inject, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CrudModule } from './crud-with-postgres/crud.module';
import { FactoryDatabaseModule } from './factory-database/factory-database.module';
import { DynamicModuleModule } from './dynamic-module/dynamic-module.module';
import { SerializationModule } from './serialization/serialization.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { ScheduleModule } from '@nestjs/schedule';
import { UploadFileModule } from './upload-file/upload-file.module';

// import cors from 'cors';

@Module({
  imports: [CrudModule, FactoryDatabaseModule, DynamicModuleModule.forRoot("I am dynamically generated"), SerializationModule, SchedulerModule,ScheduleModule.forRoot(), UploadFileModule ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(@Inject("DATABASE") private dbFactory:any){

  }
}
