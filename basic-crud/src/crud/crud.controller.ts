import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { CrudService } from './crud.service';
import { RoleGaurd } from 'src/auth-gaurds/auth.gaurds';
import { Interceptor } from 'src/interceptor/interceptor.service';
import { ClassValidatePipeService } from 'src/class-validate-pipe/class-validate-pipe.service';
import { crudDTO } from './dto/crud.dto';
import { paramDecorator } from 'src/custom-decorator/param-decorator';
import { ApiProperty } from '@nestjs/swagger';

@Controller('crud')
@UseInterceptors(new Interceptor())
export class CrudController {
    
    constructor(private crudServie:CrudService){
        
    }
    
    
    @Post('create')
    create(@Body(new ClassValidatePipeService()) value:crudDTO){
        console.log(value)
        return this.crudServie.create()
    }
    
    
    @Get('getall')
    @UseGuards(RoleGaurd)
    readall(){
        return this.crudServie.readall()
    }

    //custom parameter decorator
   
    @Get('user')
    getUser(@paramDecorator() user:any){
        return user
    }
    
   
    @Get(':id')
    readone(@Param('id') id:number){
        return this.crudServie.readone(id)
    }


    @Patch(':id')
    update(@Param('id') id:number){
        return this.crudServie.update(id)
    }

    @ApiProperty()
    @Delete(':id')
    delete(@Param('id') id:number){
        return this.crudServie.delete(id)
    }
    
}
