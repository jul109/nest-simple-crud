import { Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findGetall() {
        return "Get all";
    }

    @Get(':id')
    getById(@Param('id', ParseUUIDPipe) id: string) {
        return `Get ${id}`;
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return `Delete ${id}`;
    }

    @Put(':id')
    update(@Param('id', ParseUUIDPipe) id: string) {
        return `Update ${id}`;
    }

    @Post()
    post() {
        return "Post";
    }

    


}
