import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from 'nestjs-seeder';

@Schema({
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
})
export class User extends Document {
  declare _id: string;

  @Factory((faker) => `${faker?.person.firstName()}`)
  @Prop()
  firstName: string;

  @Factory((faker) => `${faker?.person.lastName()}`)
  @Prop()
  lastName: string;

  @Factory((faker) => `${faker?.internet.email()}`)
  @Prop()
  email: string;

  @Factory(() => {
    const minAge = 18;
    const maxAge = 30;
    return Math.round(Math.random() * (maxAge - minAge) + minAge);
  })
  @Prop()
  age: number;

  declare createdAt: Date;
  declare updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('fullName').get(function (this: User) {
  return `${this.firstName} ${this.lastName}`;
});
