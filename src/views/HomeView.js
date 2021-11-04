import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../components/ApiService';

const HomeView = () => {

  const [movies, setMovies] = useState(null);
  // const match = useRouteMatch();

  useEffect (() => {
    api().then(setMovies);
  },[])

  // console.log(movies);
  // console.log(match);

  return (
  <>
   <h1>Популярное сегодня</h1>
    <ul>
    {movies && movies.results.map(movie => <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.original_title}</Link></li>)}
    </ul>
  </>
  );
}

export default HomeView;

