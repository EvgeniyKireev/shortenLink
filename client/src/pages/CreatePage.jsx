import React, {useContext, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import s from "../styles/CreatePage.module.css"
import {withStyles} from "@material-ui/styles";
import {AuthContext} from "../Context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import {useHistory} from 'react-router-dom'

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'cornflowerblue',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'cornflowerblue',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: 'cornflowerblue',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'cornflowerblue',
            },
        },
    },
})(TextField);
export const CreatePage = (props) => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {request} = useHttp()

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                })
                history.push(`/detail/${data.link._id}`)
            } catch (e) {
            }
        }
    }
    const [link, setLink] = useState('');
    return (<div className={s.link}>
        <CssTextField value={link} onKeyPress={pressHandler} onChange={e => setLink(e.target.value)}
                      id="standard-basic" label="Введите ссылку"
                      name={'email'}/>
    </div>);

}