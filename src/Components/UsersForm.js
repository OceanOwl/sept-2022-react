import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../Validators/userValidator";
import {userService} from "../Api";

const UsersForm = () => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    })

    const submit = async (newUser) => {
        const {data} = await userService.create(newUser)
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'id'}{...register('id')}/>
            {errors.id && <span>{errors.id.message}</span>}

            <input type="text" placeholder={'name'}{...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type="text" placeholder={'username'}{...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}

            <input type="text" placeholder={'phone'}{...register('phone')}/>
            {errors.phone && <span>{errors.phone.message}</span>}

            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {UsersForm};