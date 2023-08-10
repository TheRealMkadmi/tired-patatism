import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Component } from '@/form-builder/entities/component.entity';

@Schema({
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
})
export class FormBuilder extends Document {
  declare _id: string;
  @Prop({ type: Types.Array })
  components: Component[];
}
export const FormBuilderSchema = SchemaFactory.createForClass(FormBuilder);
