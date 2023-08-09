import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Factory } from 'nestjs-seeder';
import { AutoMap } from '@automapper/classes';

mongoose.set('strictQuery', true); // placed here for the lack of a better place, for now.

@Schema({
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
})
export class User extends Document {
  declare _id: string;

  @Factory((faker) => `${faker?.person.firstName()}`)
  @Prop({ type: String })
  @AutoMap()
  firstName: string;

  @Factory((faker) => `${faker?.person.lastName()}`)
  @Prop({ type: String })
  @AutoMap()
  lastName: string;

  @Factory((faker) => `${faker?.internet.email()}`)
  @Prop({ type: String })
  @AutoMap()
  email: string;

  @Factory(() => {
    const minAge = 18;
    const maxAge = 30;
    return Math.round(Math.random() * (maxAge - minAge) + minAge);
  })
  @Prop({ type: Number })
  @AutoMap()
  age: number;

  declare createdAt: Date;
  declare updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('fullName').get(function (this: User) {
  return `${this.firstName} ${this.lastName}`;
});
