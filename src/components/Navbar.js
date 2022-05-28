import React, { Component } from 'react'
import "../css/Navbar.css"
import { NavLink } from "react-router-dom";
import { createRef } from 'react';
import logo from "../images/logo.png"


class Navbar extends Component {

    state={
      navToggle:false,
    }

    openMobileNav = ()=>{
      let value = this.state.navToggle;
      console.log(value)
      this.setState({navToggle:!value})
    }
  
  render() {
    return (
      <div className='navbarr'>
          <div className='navbar__container'>
            <NavLink className='navbar__logo' to="/MoviesLand/"><img src={logo}/></NavLink>
            <ul className='navbar__list'>
                <li><NavLink className='links' exact to="/MoviesLand/">Home</NavLink></li>
                <li><NavLink className='links' to="/MoviesLand/movies">Movies</NavLink></li>
                <li><NavLink className='links' to="/MoviesLand/series">Series</NavLink></li>
                <li><NavLink className='links' to="/MoviesLand/actors">Actors</NavLink></li>
                <li><a className="block">Coming soon</a></li>
            </ul>
            <button className={`navbar__hamburger ${this.state.navToggle?"open":''}`} ref={this.myButton} onClick={this.openMobileNav}><img/></button>
          </div>
          
          <ul className={`navbar__list__mobile ${this.state.navToggle?"showNav":''}`}>
                <li><NavLink className='links' exact to="/MoviesLand/">Home</NavLink></li>
                <li><NavLink className='links' to="/MoviesLand/movies">Movies</NavLink></li>
                <li><NavLink className='links' to="/MoviesLand/series">Series</NavLink></li>
                <li><NavLink className='links' to="/MoviesLand/actors">Actors</NavLink></li>
                <li><a className="block">Coming soon</a></li>
            </ul>
      </div>    
    )
  }
}

export default Navbar;