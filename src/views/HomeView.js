import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../components/ApiService';

const HomeView = () => {

  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect (() => {
    api().then(setMovies);
  },[])
  
  return (
  <>
   <h1>Популярное сегодня</h1>
    <ul>
    {movies && movies.results.map(movie => <li key={movie.id}> <Link to={{pathname: `/movies/${movie.id}`, state:{from: location},}}> {movie.original_title} </Link> </li>)}
    </ul>
  </>
  ); 
}

export default HomeView;

