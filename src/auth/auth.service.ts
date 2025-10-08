import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDtoAuth } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { UsersService } from 'src/users/users.service';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService, @InjectRepository(User) private readonly userRepository: Repository<User>) { }

  async login(loginUserDto: LoginUserDto) {

    const { password, username } = loginUserDto;
    const user = await this.userRepository.findOne({
      where: { username },
      select: ['id', 'username', 'password', 'isActive', 'roles']
    })
    if (!user || !bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException('Invalid credentials');

    return {
      user_id: user.id,
      username: user.username,
      roles: user.roles,
      isActive: user.isActive,
      token: this.jwtService.sign({ user_id: user.id, roles: user.roles})
    };

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
    if (!user) {
      throw new NotFoundException("username not found");
    }
    const updateUserDto: UpdateUserDto = {
      ...updateUserDtoAuth
    }
    return await this.usersService.update(user.id, updateUserDto);


  }

}
