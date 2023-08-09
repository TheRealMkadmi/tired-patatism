import { Injectable } from '@nestjs/common';
import { BaseService } from '@common/services/BaseService';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, Model } from 'mongoose';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
    super(userModel);
  }

  // Test transaction
  async createTwoUsersWithSameEmail(
    userDetails: Partial<User>,
  ): Promise<User[]> {
    return this.withTransaction(async (session: ClientSession) => {
      const newUser1 = await this.model.create([userDetails], { session });
      const newUser2 = await this.model.create([userDetails], { session }); // This will fail if email is unique
      return [...newUser1, ...newUser2];
    });
  }
}
