import React , {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';

const Home = lazy(() => import('./views/HomeView.js'))
const Movies = lazy(() => import('./views/MoviesView.js'));
const MainMenu = lazy(() => import('./views/MainMenu.js'));
const SearchView = lazy(() => import('./views/SearchView.js'));

const App = () => (
    <>
    

    <Suspense fallback={<h1>AAAAAaaaaaaa.....</h1>} >

    <MainMenu />

    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/movies/:movieid' component={Movies}></Route>
      <Route path='/movies?query=:query' component={SearchView}></Route>
      <Route path='/movies/' exact component={Movies}></Route>

      <Route path='/movies/' exact > <Movies /> </Route>

      <Route component={Home}></Route>
    </Switch>

    </Suspense>
    </>
  );


export default App;


