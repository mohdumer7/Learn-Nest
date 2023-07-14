import { Body, Controller, Delete, DynamicModule, Get, Inject, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { CrudService } from './crud.service';
import { ClassValidatePipeService } from 'src/class-validate-pipe/class-validate-pipe.service';
import { crudDTO } from './dto/crud.dto';
import { paramDecorator } from 'src/custom-decorator/param-decorator';
import { ApiProperty } from '@nestjs/swagger';
import {Pool} from "pg"

@Controller('crud')
export class CrudController {
  

    constructor(private crudServie:CrudService,@Inject('CONNECTION') private connection:{connect:string},@Inject('PG_PROVIDER') private db:Pool,@Inject("value") private val:DynamicModule){
        // this.db.query("select * from test_table_2;").then(data=>console.log(data))
        console.log(this.val)
    }
    
    
    @Post('create')
    create(@Body(new ClassValidatePipeService()) value:crudDTO){
        console.log(this.connection)
        return this.crudServie.create()
    }
    
    
    @Get('getall')
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
