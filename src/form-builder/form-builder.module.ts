import { Module } from '@nestjs/common';
import { FormBuilderService } from './form-builder.service';
import { FormBuilderController } from './form-builder.controller';

@Module({
  controllers: [FormBuilderController],
  providers: [FormBuilderService],
})
export class FormBuilderModule {}
