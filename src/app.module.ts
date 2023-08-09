import { Module } from '@nestjs/common';
import { UserModule } from '@user/user.module';
import { classes } from '@automapper/classes';
import { MongooseModule } from "@nestjs/mongoose";
import { AutomapperModule } from "@timonmasberg/automapper-nestjs";
import { CommandModule } from "nestjs-command";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

@Module({
  imports: [
    CommandModule,
    MongooseModule.forRoot(process.env.MONGO_URI!),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),

    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
