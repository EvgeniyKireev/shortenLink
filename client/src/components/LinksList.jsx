import React from 'react';
import {Link} from "react-router-dom";
import s from '../styles/LinksList.module.css'
export const LinksList = ({links}) => {
    if (links.length === 0) {
        return <p>Ссылок нет</p>
    }
    return <div className={s.linkedList}>
        <table>
            <thead>
            <tr >
                <th>№</th>
                <th>Оригинальная</th>
                <th className={s.sokr}>Сокращенная</th>
                <th>Открыть</th>
            </tr>
            </thead>

            <tbody>
            { links.map((link, index) => {
                return (
                    <tr key={link._id}>
                        <td>{index + 1}</td>
                        <td>{link.from}</td>
                        <td className={s.sokr}>{link.to}</td>
                        <td>
                            <Link to={`/detail/${link._id}`}>Открыть</Link>
                        </td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    </div>
}