import { AutoMap } from "@automapper/classes";

export class UserDto {
  @AutoMap()
  _id: string;

  @AutoMap()
  firstName: string;

  @AutoMap()
  lastName: string;

  @AutoMap()
  age: number;
}
