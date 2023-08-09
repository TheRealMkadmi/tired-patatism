import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete
} from "@nestjs/common";
import { UsersService } from '@user/user.service';
import { UserDto } from '@user/user.dto';
import { User } from '@user/user.schema';
import { Mapper } from '@automapper/core';
import { InjectMapper } from "@timonmasberg/automapper-nestjs";

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @InjectMapper() private classMapper: Mapper,
  ) {}

  @Post()
  async create(@Body() createUserDto: UserDto): Promise<UserDto> {
    const user = this.classMapper.map(createUserDto, UserDto, User);
    const created = await this.usersService.create(user);
    return this.classMapper.mapAsync(created, User, UserDto);
  }

  @Get()
  async findAll(): Promise<UserDto[]> {
    const users = await this.usersService.find();
    return this.classMapper.mapArrayAsync(users, User, UserDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDto> {
    const user = await this.usersService.findById(id);
    return this.classMapper.mapAsync(user, User, UserDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UserDto,
  ): Promise<UserDto> {
    updateUserDto._id = id;
    const entity = this.classMapper.map(updateUserDto, User, UserDto);
    const updated = await this.usersService.updateById(id, entity);
    return this.classMapper.mapAsync(updated, User, UserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.usersService.deleteById(id);
  }
}
