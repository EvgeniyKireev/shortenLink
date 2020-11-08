import React from 'react';
export const LinkCard = ({link}) => {
    return <div>
        <h2>Ссылка</h2>
        <div>
        Ваша ссылка: {link.from}
    </div>
    <div>
        Короткая ссылка: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a>
    </div>
        <div>Количество кликов: {link.click}</div>
    <div>Дата создания: {new Date(link.date).toLocaleDateString()}</div></div>
}