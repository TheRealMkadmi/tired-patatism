import { Module } from '@nestjs/common';
import { FormEventsController } from './form-events.controller';
import {FormEventsService} from "./form-events.service";

@Module({
  controllers: [FormEventsController],
  providers: [FormEventsService],
  exports: [FormEventsService]
})
export class FormEventsModule {}
