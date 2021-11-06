import React from "react";
import {NavLink} from 'react-router-dom';
import s from '../style/App.module.css';

export default function() {

    return (
        <ul className={s.menu}>
        <li className={s.menu__item}><NavLink to="/" className={s.menu__link}>Главная</NavLink></li>  
        <li className={s.menu__item}><NavLink to="/movies/" className={s.menu__link}>Фильмы</NavLink></li>
        </ul>
    )

}





