import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, Types} from "mongoose";

export enum ComponentType {
    TEXT = 'text',
    EMAIL = 'email',
    PASSWORD = 'password',
    NUMBER = 'number',
    DATE = 'date',
    SELECT = 'select',
    RADIO = 'radio',
    CHECKBOX = 'checkbox',
    TEXTAREA = 'textarea',
    FILE = 'file',
}
class Component  {
    @Prop({ required: true, type: String })
    label: string;
    @Prop({ required: true, type: String })
    key: string;
    @Prop({ required: true, type: String, enum: ComponentType })
    type: ComponentType;
}
@Schema({
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
})
export class FormBuilder extends Document {
    declare _id: string;
    @Prop({ type: Types.Array})
    components: Component[];
}
export const FormBuilderSchema = SchemaFactory.createForClass(FormBuilder);
