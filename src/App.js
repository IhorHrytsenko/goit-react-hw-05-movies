import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import s from './style/App.module.css';

import Home from './views/HomeView';
import Movies from './views/MoviesView';



const App = () => (
    <>
      <ul className={s.menu}>
        <li className={s.menu__item}><NavLink to="/" className={s.menu__link}>Главная</NavLink></li>  
        <li className={s.menu__item}><NavLink to="/movies" className={s.menu__link}>Фильмы</NavLink></li>
      </ul>

    <Switch>
      <Route path='/' exact component={Home} ></Route>
      <Route path='/movies' exact component={Movies}></Route>
      <Route path='/movies/:movieid' component={Movies}></Route>

      <Route component={Home}></Route>
    </Switch>

    </>
  );


export default App;


