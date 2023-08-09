import { PartialType } from '@nestjs/swagger';
import { CreateFormBuilderDto } from './create-form-builder.dto';

export class UpdateFormBuilderDto extends PartialType(CreateFormBuilderDto) {}
