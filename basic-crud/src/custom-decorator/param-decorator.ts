import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const paramDecorator = createParamDecorator(
    (data:unknown,context:ExecutionContext)=>{
        const request = context.switchToHttp().getRequest()
        const user = request.user
        return user
    }
    )