import { Module } from '@nestjs/common';
import {Pool} from "pg"
@Module({
    imports:[],
    exports:["DATABASE"],
    providers:[{
        provide:"DATABASE",
        useFactory:()=>{
            return new Pool({
                user:'postgres',
                password:'admin',
                host:'localhost',
                port:5432,
                database:'testdb'
            }).query("select * from test_table_2;").then(data=>console.log(data.rows))
        }
    }]
})
export class FactoryDatabaseModule {}
 