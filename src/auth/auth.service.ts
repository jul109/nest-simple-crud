import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';

import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
@Injectable()
export class AuthService {

  login(loginUserDto:LoginUserDto){
    return "Login"
  }

  register(register: RegisterUserDto){
    return "Register User dto";
  }

  update(username:string,updateUserDto:UpdateUserDto){
    return `Update User ${username} ${updateUserDto.username}`
  }
  
}
