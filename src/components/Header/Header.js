import React from 'react';

import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.Header}>
            <NavLink to={""}>home</NavLink>
            <NavLink to={"todos"}>todos</NavLink>
            <NavLink to={"albums"}>albums</NavLink>
            <NavLink to={"comments"}>comments</NavLink>
        </div>
    );
};

export {Header};