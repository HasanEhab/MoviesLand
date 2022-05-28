import React, { Component } from 'react'
import "../css/Actor.css"
import Moviecard from "./Moviecard"
import axios from 'axios'
import { NavLink } from 'react-router-dom'


class Actor extends Component {
    state={
        actorDetails:[],
        imgFirstPart:'https://image.tmdb.org/t/p/w500',
    }

    componentDidMount(){
     axios.get('https://api.themoviedb.org/3/trending/person/week?api_key=0df234432f8793b594a3b4edddc0e3a0')
     .then(data=>{
        this.setState({
            actorDetails:data.data.results
        });
        setTimeout(()=>{

        },1000)
    })
     .catch(err=>{return console.log(err)})
    }

  render() {
    return (
        <div className='actor'>
            <div className='actor__container'>            
                <div className='actor__title'>Trending Actors</div>
                <div className='actor__content'>
                    {this.state.actorDetails.length? this.state.actorDetails.map(person=>{
                        return (
                            person.profile_path?
                            <NavLink to={"/actor/:" + person.id} key={person.id} className="movies__card col-xl-3 col-lg-4 col-md-4 col-sm-6 col-10 offset-0 mt-5 px-4 pt-1">
                            <Moviecard name={person.name} img={this.state.imgFirstPart+person.profile_path} rate={person.known_for[0]?person.known_for[0].vote_average.toFixed(1):''}/>                         
                            </NavLink>:''
                        )
                         }):''}
                </div>
            </div>
        </div>
    )
  }
}

export default  Actor;