import Joi from "joi";

const CommentValidator=Joi.object({
    id: Joi.number()
        .min(0)
        .max(999)
        .required(),

    name:Joi.string()
        .regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)
        .required()
        .messages({'string.pattern.name':'Тільки букви'}),

    email:Joi.string()
        .regex(/^[a-zA-Zа-яА-яёЁіІїЇ@]{1,20}$/)
        .required()
        .messages({'string.pattern.name':'Невірно вказаний email'}),

    body:Joi.string()
        .regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,50}$/)
        .required()
        .messages({'string.pattern.name':'Тільки букви'}),

});
export {CommentValidator}