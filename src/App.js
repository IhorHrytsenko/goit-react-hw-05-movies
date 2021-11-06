import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './views/HomeView';
import Movies from './views/MoviesView';
import SearchView from './views/SearchView';
import MainMenu from './views/MainMenu';



const App = () => (
    <>
    <MainMenu />

    <Switch>
      <Route path='/' exact component={Home} ></Route>
      <Route path='/movies/:movieid' component={Movies}></Route>
      <Route path='/movies/:query' component={SearchView}></Route>
      <Route path='/movies/' exact component={Movies}></Route>

      <Route component={Home}></Route>
    </Switch>

    </>
  );


export default App;


