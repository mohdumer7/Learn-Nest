import { Module } from '@nestjs/common';
import { BasicApiModule } from './basic-api/basic-api.module';

@Module({
  imports: [BasicApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
