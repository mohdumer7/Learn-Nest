import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, OpenAPIObject,SwaggerModule } from "@nestjs/swagger";
import { SWAGGERCONFIG } from "./swagger.config";

export function createDocument(app:INestApplication):OpenAPIObject{
    const builder = new DocumentBuilder()
    .setTitle(SWAGGERCONFIG.title)
    .setDescription(SWAGGERCONFIG.description)
    .setVersion(SWAGGERCONFIG.version)
    .addBasicAuth({type:'http',scheme:'bearer',bearerFormat:'JWT',},'access-token')
    .setVersion(SWAGGERCONFIG.version)

    for(const tag of SWAGGERCONFIG.tags){
        builder.addTag(tag)
    }

    const options = builder.build()

    return SwaggerModule.createDocument(app,options)
}