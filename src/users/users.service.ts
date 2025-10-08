import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { isUUID } from 'class-validator';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import * as bcrypt from 'bcrypt';



@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) { }
    private readonly HASH_IT = 10; 
    async create(createUserDto: CreateUserDto) {
        try {
            const { password, ...userData } = createUserDto;
            const user = this.userRepository.create({
                password: bcrypt.hashSync(password, this.HASH_IT),
                ...userData
            }
            )

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

    async findAll(paginationDto: PaginationDto) {
        const { limit, offset } = paginationDto;
        return await this.userRepository.find({
            take: limit,
            skip: offset
        });
    }

    async remove(id: number) {
        const brand = await this.findOne(id);

        return await this.userRepository.remove(brand);
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        if (updateUserDto.password) {
            updateUserDto.password = bcrypt.hashSync(updateUserDto.password, this.HASH_IT);
        }
        const user: User | undefined = await this.userRepository.preload({
            id,
            ...updateUserDto
        });

        if (!user)
            throw new NotFoundException(`User with id ${id} not found`);


        return await this.userRepository.save(user);

    }












}
