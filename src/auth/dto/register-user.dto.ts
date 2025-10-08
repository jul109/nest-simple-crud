import { IsArray, isString, IsString, Length } from "class-validator";

export class RegisterUserDto{
    @IsString()
    @Length(3,100)
    readonly username: string;
    @IsString()
    @Length(10,30)
    password: string;
}