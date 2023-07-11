import * as Joi from "joi"

export const joiSchema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required()
})


export interface joiDTO{
    name:string
    email:string
}