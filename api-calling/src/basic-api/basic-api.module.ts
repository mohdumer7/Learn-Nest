import { Module } from '@nestjs/common';
import { BasicApiController } from './basic-api.controller';
import { BasicApiService } from './basic-api.service';

@Module({
  controllers: [BasicApiController],
  providers: [BasicApiService]
})
export class BasicApiModule {}
