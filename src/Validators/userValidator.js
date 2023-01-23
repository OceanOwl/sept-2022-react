import Joi from "joi";

const userValidator = Joi.object({
    id: Joi.number()
        .min(0)
        .max(999)
        .required(),

    name:Joi.string()
        .regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)
        .required()
        .messages({'string.pattern.name':'Тільки букви'}),

    username:Joi.string()
        .regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)
        .required()
        .messages({'string.pattern.username':'Тільки букви'}),

    phone:Joi.string()
        .required()
        .length(10)


})
export {userValidator}