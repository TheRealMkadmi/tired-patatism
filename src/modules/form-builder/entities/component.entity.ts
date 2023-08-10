import {Prop} from "@nestjs/mongoose";
import {ComponentType} from "@/form-builder/constants/form-builder-enums.";
import {Types} from "mongoose";

export class Component {
    @Prop({ required: true, type: String })
    label: string;
    @Prop({ required: true, type: String })
    key: string;
    @Prop({ required: true, type: String, enum: ComponentType })
    type: ComponentType;
    @Prop({ type: Types.Array})
    options?: string[];
}
