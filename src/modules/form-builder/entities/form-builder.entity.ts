import { Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema({
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
})
export class FormBuilder extends Document {
    declare _id: string;
}
export const FormBuilderSchema = SchemaFactory.createForClass(FormBuilder);
