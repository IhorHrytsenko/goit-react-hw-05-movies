import React from "react";
import { Route, NavLink, Switch } from 'react-router-dom';
import s from '../style/MovieDetailView.module.css';
import CastView from './CastView';
import ReviewsView from './ReviewsView';

export default function ({movie}) {

  console.log("movie ", movie.genres);

    return(
      <div>
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
        {movie.genres && movie.genres.map(genre => <span key={genre.id}> {genre.name} </span>)}
        </li>
        </ul>
        </section>

        <section className={s.general}>
        <p>Дополнительная информация</p>
        <ul>
        <li>
        <NavLink to={`/movies/${movie.id}/cast`}>Актеры</NavLink>
        </li> 
        <li><NavLink to={`/movies/${movie.id}/reviews`}>Отзывы</NavLink></li> 
        </ul>
        </section>


        <Switch> 

        <Route path="/movies/:movieId/cast">
            <section className={s.general}>
              <CastView movieId={movie.id}/>  
            </section>         
        </Route>

        <Route path="/movies/:movieId/reviews">
            <section className={s.general}>
              <ReviewsView movieId={movie.id}/>
            </section>            
        </Route>

        </Switch> 
        </div>
    )
} 




//<NavLink to='/movies/:movieId/cast' component={CastView} exact>Актеры</NavLink>