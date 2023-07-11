import {ExceptionFilter, Catch, HttpException, ArgumentsHost } from "@nestjs/common";
import { Request, Response } from "express";



@Catch(HttpException)
export class exceptionFilter implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const request = ctx.getRequest<Request>()
        const response = ctx.getResponse<Response>()

        const statusCode = exception.getStatus()

        response.status(statusCode).json({
            statusCode,
            message:'Custom Error Method',
            date:Date.now(),
            path:request.url
        })
    }

}