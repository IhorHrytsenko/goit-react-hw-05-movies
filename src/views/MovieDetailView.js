import React from "react";
import { NavLink } from 'react-router-dom';
import s from '../style/MovieDetailView.module.css';

export default function ({movie}) {

    console.log(movie);
    return(
    
        <section className={s.general}>
        <NavLink to='/' className={s.general__back}>Назад</NavLink>
          <ul className={s.general__list}>
        <li className={s.genetal__item}>
          <img alt='Плакат фильма' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
        </li>
    
        <li className={s.genetal__item}>
        <h2>{movie.original_title}</h2>
        <p>Оценка пользователей: {(movie.vote_average * 10)}%</p>
        <h2>Описание</h2>
        <p>{movie.overview}</p>
        <h2>Жанры</h2>
        {movie.genres.map(genre => <span key={genre.id}> {genre.name} </span>)}
        </li>
        
        </ul>
        </section>

    )
} 