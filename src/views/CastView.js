import React, {useEffect, useState} from 'react';
import api from '../components/ApiService';

export default function (movie){

        const {movieId} = movie; 
        const [actors, setActors] = useState(null);
    
        useEffect(() => {
            api(movieId, true).then(data => setActors(data.cast));
        }, [movieId]) 
    
        return (
    
            <ul>
                {actors ?
                actors.map(actor => <li key={actor.id}>
                <p>{actor.character}</p>
                <img src={actor.profile_path && `https://image.tmdb.org/t/p/w500${actor.profile_path}`} width="200px" alt="Actor face" />
                <p> {actor.name} </p>
                </li>
                )
                : <p>К сожалению, нет информации по актерам данного фильма</p>
                }
            </ul>
       
        )
    
}