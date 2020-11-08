import React, {useContext} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../Context/AuthContext";
import s from './navbar.module.css';
export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (<div className={s.nav}>
        <nav className={s.el}>
            <NavLink to={'/create'}>Создать</NavLink>
            <NavLink to={'/links'}>Мои ссылки</NavLink>
            <a href={"/"} onClick={logoutHandler}>Выйти</a>
        </nav>
    </div>);
}