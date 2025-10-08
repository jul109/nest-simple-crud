import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Get()
    findGetall() {
        return this.usersService.findAll();
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
