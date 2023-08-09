import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from '@user/user.service';
import { User, UserSchema } from '@user/user.schema';
import { UsersController } from '@user/user.controller';
import { AutomapperModule } from "@timonmasberg/automapper-nestjs";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    AutomapperModule,
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UserModule {}
