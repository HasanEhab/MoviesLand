import React, { Component } from 'react'
import "../css/Movies.css"
import Moviecard from "./Moviecard"
import axios from 'axios'
import {NavLink} from "react-router-dom"


class Movies extends Component {
    state={
        moviesDetails:[],
        imgFirstPart:'https://image.tmdb.org/t/p/w500',
    }
    goToMovieDetails(id){

    }

    componentDidMount(){
     axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=0df234432f8793b594a3b4edddc0e3a0')
     .then(data=>{
        this.setState({
            moviesDetails:data.data.results
        });
        console.log(this.state.moviesDetails);
    })
     .catch(err=>{return console.log(err)})
    }

  render() {
    return (
        <div className='movies'>
            <div className='movies__container'>            
                <div className='movies__title'>Trending Movies</div>
                <div className='movies__content'>
                    {this.state.moviesDetails.length ? this.state.moviesDetails.map(movie=>{
                        return (
                            <NavLink to={"/MoviesLand/movie/:" + movie.id} key={movie.id} className="movies__card col-xl-3 col-lg-4 col-md-4 col-sm-6 col-10 offset-0 mt-5 px-4 pt-1">
                            <Moviecard name={movie.title} img={this.state.imgFirstPart+movie.poster_path} rate={movie.vote_average.toFixed(1)}/>
                            </NavLink>
                        )
                     }) :''}
                </div>
            </div>
        </div>
    )
  }
}

export default  Movies;
