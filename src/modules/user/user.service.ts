import { Injectable } from "@nestjs/common";
import { BaseService } from "@common/services/BaseService";
import { User } from "./user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UsersService extends BaseService<User> {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {
    super(userModel);
  }
}
