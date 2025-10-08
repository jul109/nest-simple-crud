import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { isUUID } from 'class-validator';
import { UpdateUserDto } from './dto/update-user.dto';



@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) { }

    async create(createUserDto: CreateUserDto) {
        try {
            const user = this.userRepository.create(createUserDto);
            return await this.userRepository.save(user);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async findOne(id: number) {

        const user: User | null = await this.userRepository.findOne({
            where: { id }
        })
        if (!user) {
            throw new NotFoundException(`User not found`);
        }
        return user;
    }

    async findAll() {
        return await this.userRepository.find();
    }

    async remove(id: number) {
        const brand = await this.findOne(id);

        return await this.userRepository.remove(brand);
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        const user: User | undefined = await this.userRepository.preload({
            id,
            ...updateUserDto
        });

        if (!user)
            throw new NotFoundException(`User with id ${id} not found`);


        return await this.userRepository.save(user);

    }












}
