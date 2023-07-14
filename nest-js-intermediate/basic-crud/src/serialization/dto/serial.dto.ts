import { Exclude } from "class-transformer";

export class serializeDTO{
    name:string;
    
    @Exclude()
    passwrod:string;


    constructor(partial: Partial<serializeDTO>){
        Object.assign(this,partial)
    }

}