import { IsArray, isString, IsString, Length } from "class-validator";

export class CreateUserDto{
    @IsString()
    @Length(3,100)
    readonly username: string;
    @IsString()
    @Length(10,30)
    readonly password: string;
    @IsArray()
    @IsString({each: true})
    readonly roles: string[];
}