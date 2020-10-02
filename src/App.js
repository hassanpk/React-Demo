import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import MovieReviews from './MovieReviews';
import { Switch, Route } from "react-router-dom";
import Header from "./Shared/Header/header";

class App extends React.Component {
  
  render() {
   return (
       <>
        <Header />        
        <main className="container-fluid" style={{paddingTop:"10px"}}>
          <Switch>
            <Route path='/movie/:id' render={(props) => {
              return (<MovieDetails {...props} />)
            }} />
            <Route path='/reviews/:id' render={(props) => {
              return (<MovieReviews {...props} />)
            }} />
            <Route path="/" component={MovieList} exact />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
