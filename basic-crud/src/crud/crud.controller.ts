import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CrudService } from './crud.service';

@Controller('crud')
export class CrudController {
    
    constructor(private crudServie:CrudService){

    }

    @Post('create')
    create(){
        return this.crudServie.create()
    }
    
    @Get('getall')
    readall(){
        return this.crudServie.readall()
    }
    
    
    @Get(':id')
    readone(@Param('id') id:number){
        return this.crudServie.readone(id)
    }

    @Patch(':id')
    update(@Param('id') id:number){
        return this.crudServie.update(id)
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.crudServie.delete(id)
    }
    
}
