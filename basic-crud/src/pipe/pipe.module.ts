import { Module } from '@nestjs/common';
import { PipeController } from './pipe.controller';
import { CustomPipeService } from 'src/custom-pipe/custom-pipe.service';

@Module({
  controllers: [PipeController],
  providers:[]
})
export class PipeModule {}
