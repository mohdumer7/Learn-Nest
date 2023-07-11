import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class crudDTO{
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name:string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    email:string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password:string
}