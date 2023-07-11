import { BadRequestException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";


@Injectable()
export class logger implements NestMiddleware{

    use(req: Request, res: Response, next: NextFunction) {
        console.log("Middleware call LOGGER.....")
        if(req.headers.authorization){
        }
        next()
        // throw new BadRequestException();
    }
    
}