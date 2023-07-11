import { Module } from '@nestjs/common';
import { CustomExceptionService } from './custom-exception.service';
import { CustomExceptionController } from './custom-exception.controller';

@Module({
  providers: [CustomExceptionService],
  controllers:[CustomExceptionController]
})
export class CustomExceptionModule {}
