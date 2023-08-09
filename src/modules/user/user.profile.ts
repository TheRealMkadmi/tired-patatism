import { AutomapperProfile } from '@timonmasberg/automapper-nestjs';
import type { Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { InjectMapper } from "@timonmasberg/automapper-nestjs";
import { createMap } from "@automapper/core";
import { UserDto } from "@user/user.dto";
import { User } from "@user/user.schema";

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, User, UserDto);
    };
  }
}
