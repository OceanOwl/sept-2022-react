import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../../validators";
import {carActions} from "../../redux/slices/carSlice";

const Form = () => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const dispatch = useDispatch();

    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate]);

    const sumbit = async (car) => {
        await dispatch(carActions.create({car}));
        reset()
    }

    const update = async (car) => {
        await dispatch(carActions.updateById({id: carForUpdate.id, car}))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : sumbit)}>
            <input type={"text"} placeholder={'brand'}{...register('brand')}/>
            <input type={"text"} placeholder={'price'}{...register('price', {valueAsNumber: true})}/>
            <input type={"text"} placeholder={'year'}{...register('year', {valueAsNumber: true})}/>
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'create'}</button>
        </form>
    );
};

export {Form};