import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class DynamicModuleModule {
    static forRoot(options:string):DynamicModule{
        return{
            module:DynamicModuleModule,
            providers:[{
                provide:"value",
                useValue:options
            }],
            global:true,
            exports:["value"]
        }
    }
}
