import React, { Component } from 'react'
import "../css/Home.css"
import Moviecard from "./Moviecard"
import axios from 'axios'
import MySlider from './MySlider'
import { NavLink } from 'react-router-dom'

class Home extends Component {
    state={
        moviesDetails:[],
        seriesDetails:[],
        allDetails:[],
        imgFirstPart:'https://image.tmdb.org/t/p/w500',
    }

    componentDidMount(){
        axios.all([
            axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=0df234432f8793b594a3b4edddc0e3a0'), 
            axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=0df234432f8793b594a3b4edddc0e3a0')
          ])
          .then(axios.spread((obj1, obj2) => {
                       this.setState({
                            moviesDetails:obj1.data.results,
                            seriesDetails:obj2.data.results,
                            allDetails:[...obj1.data.results,...obj2.data.results]
                        });   

          }));
    }

  render() {
    return (
        <div className='home'>
            <MySlider allDetails={this.state.allDetails}/>
            <div className='home__container'>            
                <div className='home__title'>MOVIES LAND</div>
                <div className='home__content'>
                    {this.state.allDetails.length? this.state.allDetails.map(movie=>{
                        return (
                            <NavLink to={movie.title?"/MoviesLand/movie/:" + movie.id:"/MoviesLand/serie/:" + movie.id} key={movie.id} className="movies__card col-xl-3 col-lg-4 col-md-4 col-sm-6 col-10 offset-0 mt-5 px-4 pt-1">
                            <Moviecard  name={movie.title?movie.title:movie.name} img={this.state.imgFirstPart+movie.poster_path} rate={movie.vote_average}/>
                            </NavLink>
                        )
                     }):''}
                </div>
            </div>
        </div>
    )
  }
}

export default  Home;
