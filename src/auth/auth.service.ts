import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';

import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDtoAuth } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { UsersService } from 'src/users/users.service';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/entity/user.entity';



@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) { }

  async login(loginUserDto: LoginUserDto) {
    return "Login"
  }
  async register(registerUserDto: RegisterUserDto) {
    const createUserDto: CreateUserDto = {
      ...registerUserDto,
      roles: ["normal"]
    };
    return await this.usersService.create(createUserDto);
  }

  async update(username: string, updateUserDtoAuth: UpdateUserDtoAuth) {

    const user: User = await this.usersService.findByUsername(username);
    if (!user){
      throw new NotFoundException("username not found");
    }
    const updateUserDto: UpdateUserDto = {
      ...updateUserDtoAuth
    }
    return await this.usersService.update(user.id, updateUserDto);


  }

}
