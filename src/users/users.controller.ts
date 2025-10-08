import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { Auth } from 'src/auth/decorator/auth-decorator';
import { AppRoles } from 'src/auth/interfaces/app-roles';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Get()
    @Auth(AppRoles.admin)
    findGetall(@Body() paginationDto: PaginationDto) {
        return this.usersService.findAll(paginationDto);
    }

    @Get(':id')
    getById(@Param('id', ParseUUIDPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: number) {
        return this.usersService.remove(id);
    }

    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }




}
