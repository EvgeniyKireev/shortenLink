import React, {useContext, useState} from 'react';
import s from '../styles/auth.module.css';
import {useHttp} from '../hooks/http.hook'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {AuthContext} from "../Context/AuthContext";

export const AuthPage = (props) => {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()
    let [form, setForm] = useState({email: "", password: ""});
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {}
    }
    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
        } catch (e) {
        }
    }
    return (<div className={s.authPage}>
        <div className={s.header}>Войдите или зарегистрируйтесь</div>
        <div className={s.inputField}>
            <TextField onChange={changeHandler} value={form.email} id="standard-basic" label="Введите email"
                       name={'email'}/>
            <TextField onChange={changeHandler} value={form.password} id="standard-basic" label="Введите пароль"
                       name={'password'} type={'password'}/>
            <div className={s.btn}><Button onClick={loginHandler} variant="contained" color="primary">
                Войти</Button>
                <Button onClick={registerHandler} variant="contained">Зарегистрироваться</Button></div>
            <div className={s.error}>{error}</div>
        </div>
    </div>);

}