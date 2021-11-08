import React, {Suspense, lazy} from "react";
import { Route, NavLink, Switch, useHistory } from 'react-router-dom';
import s from '../style/MovieDetailView.module.css';

const ReviewsView = lazy(() => import('./ReviewsView.js'));
const CastView = lazy(() => import('./CastView.js'));

export default function ({movie, location, firstQuery}) {

    const history = useHistory();

    console.log("q ", firstQuery);
    console.log("s ", location);

    function goBack(){
      history.push(location.state.from)


    //   history.push({
    //     ...location,
    //    search: `query=${firstQuery}`});
    }

    return(
      <div>
        <section className={s.general}>
        {/* <NavLink to={firstQuery && `movie/?query=${firstQuery}`} className={s.general__back}>Назад</NavLink> */}
        <button onClick={goBack}> Назад </button>
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
        <NavLink to={{pathname: `/movies/${movie.id}/cast`, state:{from: location},}}  >Актеры</NavLink>
        </li> 
        <li><NavLink to={{pathname: `/movies/${movie.id}/reviews`, state:{from: location},}}>Отзывы</NavLink></li> 
        </ul>
        </section>


        <Switch> 
        <Route path="/movies/:movieId/cast">
            <section className={s.general}>
            <Suspense fallback={<h1>AAAAAaaaaaaa.....</h1>}>
              <CastView movieId={movie.id}/>
            </Suspense>  
            </section>         
        </Route>

        <Route path="/movies/:movieId/reviews">
            <section className={s.general}>
            <Suspense fallback={<h1>AAAAAaaaaaaa.....</h1>}>
              <ReviewsView movieId={movie.id}/>
            </Suspense>
            </section>            
        </Route>

        </Switch> 
        </div>
    )
} 




//<NavLink to='/movies/:movieId/cast' component={CastView} exact>Актеры</NavLink>