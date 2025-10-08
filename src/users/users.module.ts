import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './entity/user.entity'
import { UsersService } from './users.service';


@Module({
  controllers: [UsersController],
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule] 

})
export class UsersModule {
    
}
