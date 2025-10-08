import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import {  LoginUserDto } from './dto/login-user.dto';

import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDtoAuth } from './dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto){
    return this.authService.login(loginUserDto);
  }
  
  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @Patch('update/:username')
  update(@Param('username') username: string,@Body() updateUserDtoAuth: UpdateUserDtoAuth) {
    return this.authService.update(username,updateUserDtoAuth);
  }

  
}
