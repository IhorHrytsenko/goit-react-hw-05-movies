import React, {useEffect, useState} from 'react';
import {NavLink, useRouteMatch, Route } from 'react-router-dom';
import s from '../style/Form.module.css';
import MovieDetailView from './MovieDetailView';

export default function (){

    const APIKEY = '6456edf8e78b4973f18f7c8d63cd4cb6';

    const [result, setResult] = useState(null);
    const {query} = useRouteMatch();

    function apiConnect(event) {
        event.preventDefault();

        const q = event.target[0].value;

        try{
                return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${q}`)
                .then(response => response.json())
                .then(data => setResult(data))
        }
        catch(error){
                return console.log(error);
        }
    
    }

    return (
        <>
        <form className={s.form} onSubmit={apiConnect}>
            <input className={s.search__input} /> 
            <button type="submit" className={s.search__btn}>Найти</button>

            <ul>
                {result && result.results.map(r => 
                        
                        <li key={r.id}> <NavLink to={`${r.id}`}> {r.title}</NavLink> </li> 
                        
                    )
                }
            </ul>
        </form>
        </>
    )
}