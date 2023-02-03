import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.Header}>
            <NavLink to={""}>home</NavLink>
            <NavLink to={"posts"}>posts</NavLink>
            <NavLink to={"comments"}>comments</NavLink>
            <NavLink to={"cats and dogs"}>cats and dogs</NavLink>
            <NavLink to={"cars"}>cars</NavLink>
        </div>
    );
};

export {Header};