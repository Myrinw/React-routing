import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DiscoverMoviePage from './pages/DiscoverMoviePage';
import MoviePage from './pages/MoviePage';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/movies/:something" component={MoviePage} />
        <Route path="/discover/:searchtext?" component={DiscoverMoviePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>

    </div>
  );
}

export default App;
