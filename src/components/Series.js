import React, { Component } from 'react'
import "../css/Series.css"
import Moviecard from "./Moviecard"
import axios from 'axios'
import { NavLink } from 'react-router-dom'

class Series extends Component {
    state={
        seriesDetails:[],
        imgFirstPart:'https://image.tmdb.org/t/p/w500',
    }

    componentDidMount(){
     axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=0df234432f8793b594a3b4edddc0e3a0')
     .then(data=>{
        this.setState({
            seriesDetails:data.data.results
        });
        console.log(this.state.seriesDetails);
    })
     .catch(err=>{return console.log(err)})
    }

  render() {
    return (
        <div className='series'>
            <div className='series__container'>            
                <div className='series__title'> Trending Series</div>
                <div className='series__content'>
                    {this.state.seriesDetails.length? this.state.seriesDetails.map(series=>{
                        return (
                            series.poster_path?
                            <NavLink to={"/serie/:" + series.id} key={series.id} className="movies__card col-xl-3 col-lg-4 col-md-4 col-sm-6 col-10 offset-0 mt-5 px-4 pt-1">
                            <Moviecard  name={series.name} img={this.state.imgFirstPart+series.poster_path} rate={series.vote_average.toFixed(1)}/>
                            </NavLink>:''
                        )}):''}
                </div>
            </div>
        </div>
    )
  }
}

export default  Series;