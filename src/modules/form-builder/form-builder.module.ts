import {Module} from '@nestjs/common';
import {FormBuilderService} from './form-builder.service';
import {FormBuilderController} from './form-builder.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {FormBuilder, FormBuilderSchema} from "@/form-builder/entities/form-builder.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        schema: FormBuilderSchema,
        name: FormBuilder.name,
      }
    ])
  ],
  controllers: [FormBuilderController],
  providers: [FormBuilderService],
})
export class FormBuilderModule {}
