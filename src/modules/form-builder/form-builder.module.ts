import { Module } from '@nestjs/common';
import { FormBuilderService } from './form-builder.service';
import { FormBuilderController } from './form-builder.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { FormBuilder, FormBuilderSchema } from "@/form-builder/entities/form-builder.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: FormBuilder.name, schema: FormBuilderSchema }]),
  ],
  controllers: [FormBuilderController],
  providers: [FormBuilderService],
})
export class FormBuilderModule {}
