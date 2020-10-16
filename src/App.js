import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './Pages/MovieList';
import MovieDetails from './Pages/MovieDetails';
import MovieReviews from './Pages/MovieReviews';
import { Switch, Route } from "react-router-dom";
import Header from "./Shared/Header/header";
import FavMovieList from "./Pages/FavMovieList";
import { FavMovieProvider } from "./FavMovieContext";

const App = (props) => {

  const [favmovies, setfavmovies] = useState([]);

  return (
    <FavMovieProvider value={[favmovies, setfavmovies]}>
      <Header />
     
      <main className="container-fluid" style={{ paddingTop: "10px" }}>
        <Switch>
          <Route path='/movie/:id' render={(props) => {
            return (<MovieDetails {...props} />)
          }} />
          <Route path='/reviews/:id' render={(props) => {
            return (<MovieReviews {...props} />)
          }} />
          <Route path="/fav" component={FavMovieList} />
          <Route path="/" component={MovieList} exact />
        </Switch>
      </main>
    </FavMovieProvider>
  );

}

export default App;
