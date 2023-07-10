import { Injectable } from '@nestjs/common';

@Injectable()
export class CrudService {

    create(){
        return 'created user'
    }
    
    readall(){
        return 'All the users'
    }
       
    readone(id:number){
        return `one user of id: ${id}`
    }
  
    update(id:number){
        return `Updated one user of id: ${id}`
    }

    delete(id:number){
        return `Deleted one user of id: ${id}`
    }
}
