import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentService} from "../Services";
import {CommentValidator} from "../Validators/CommentValidator";

const CommentForm = ({setComments}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver:joiResolver(CommentValidator)
    })

    const submit = (newComment) => {
        const {data} = commentService.create(newComment)
        setComments(previous=>[...previous,data])
        reset()

    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'id'}{...register('id')}/>
            {errors.id && <span>{errors.id.message}</span>}


            <input type="text" placeholder={'name'}{...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type="text" placeholder={'email'}{...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}

            <input type="text" placeholder={'body'}{...register('body')}/>
            {errors.body && <span>{errors.body.message}</span>}

            <button disabled={!isValid}>Create</button>

        </form>
    );
};

export {CommentForm};