import './App.css';
import { Component } from 'react';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Actor from "./components/Actor"
import Series from "./components/Series"
import Movies from "./components/Movies"
import MoviesDetails from "./components/MoviesDetails"
import SeriesDetails from "./components/SeriesDetails"
import ActorDetails from "./components/ActorDetails"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


class App extends Component{
  render(){
    return (<div className='App'>
              <BrowserRouter>
                <Navbar/>
                  <Route path="/MoviesLand/" exact component={Home} />
                  <Route path="/MoviesLand/series" exact component={Series} />
                  <Route path="/MoviesLand/movies" exact component={Movies} />
                  <Route path="/MoviesLand/actors" exact component={Actor} />
                  <Route path="/MoviesLand/movie/:id" exact component={MoviesDetails} />
                  <Route path="/MoviesLand/serie/:id" exact component={SeriesDetails} />
                  <Route path="/MoviesLand/actor/:id" exact component={ActorDetails} />
              </BrowserRouter>
            </div>     
    );
  }
}

export default App;
