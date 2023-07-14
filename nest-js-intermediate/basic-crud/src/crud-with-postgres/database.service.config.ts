import {Pool} from "pg";


export const db_provider = {
    provide:'PG_PROVIDER',
    useValue:new Pool({
        user:'postgres',
        password:'admin',
        host:'localhost',
        port:5432,
        database:'testdb'
    })
}