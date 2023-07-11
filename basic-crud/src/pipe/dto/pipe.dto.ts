import { IsNotEmpty, IsString } from "class-validator";

export class pipeDTO{
    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    email:string
}