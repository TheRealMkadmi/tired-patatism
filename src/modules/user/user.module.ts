import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from '@user/user.service';
import { User, UserSchema } from '@user/user.schema';
import { UsersController } from '@user/user.controller';
import { AutomapperModule } from "@timonmasberg/automapper-nestjs";
import { UserProfile } from "@user/user.profile";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    AutomapperModule,
  ],
  providers: [UserProfile, UserService],
  controllers: [UsersController],
  exports: [UserService],
})
export class UserModule {}
