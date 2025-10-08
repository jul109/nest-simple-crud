import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './entity/user.entity'
import { UsersService } from './users.service';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  controllers: [UsersController],
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => AuthModule)
  ],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule] 

})
export class UsersModule {
    
}
