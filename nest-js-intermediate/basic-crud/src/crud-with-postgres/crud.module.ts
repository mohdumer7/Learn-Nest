import {  Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
import { db_provider } from './database.service.config';
import { FactoryDatabaseModule } from 'src/factory-database/factory-database.module';




@Module({
  providers: [CrudService,{
    provide:'CONNECTION',
    useValue:{connect:'i am connected'}
  },db_provider],
  controllers:[CrudController],
  exports:[db_provider]
})
export class CrudModule {}
