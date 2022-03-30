import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './category/category.module';
// import * as Joi from '@hapi/joi';

@Module({
  imports: [TaskModule, ConfigModule.forRoot(), DatabaseModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
