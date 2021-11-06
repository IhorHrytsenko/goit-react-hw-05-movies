import React, {useState, useEffect} from 'react';
import {NavLink, useLocation } from 'react-router-dom';
import s from '../style/Form.module.css';


export default function ({firstQuery, HistorySearch}){

    const APIKEY = '6456edf8e78b4973f18f7c8d63cd4cb6';
    const [result, setResult] = useState(null);
    const location = useLocation();

    useEffect(() => {

        if(location.search === ''){
            return;
        }

        HistorySearch(firstQuery);
        api(firstQuery);

    }, [location.search])

    function api(query){

        if(query){

            HistorySearch(query);
            try{    
                    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`)
                    .then(response => response.json())
                    .then(data => setResult(data))
                    
            }
            catch(error){
                    return console.log(error);
            }
        }
    }

    function apiForm(event) {
        
        event.preventDefault();
        const query = event.target[0].value;        
        api(query);
       
    }
 
    return (
        <>
        <form className={s.form} onSubmit={apiForm}>
         <input className={s.search__input} /> 
            <button type="submit" className={s.search__btn}>Найти</button>

        {location.search === '' ?
            <ul>
                {result && result.results.map(r => 
                        
                        <li key={r.id}> <NavLink to={`${r.id}`}> {r.title}</NavLink> </li> 
                    )
                }
            </ul>
        
          :  <ul>
                {result && result.results.map(r => 
                        
                        <li key={r.id}> <NavLink to={`${r.id}`}> {r.title}</NavLink> </li> 
                    )
                }
            </ul>
        
        }


        </form>
        </>
    )
}