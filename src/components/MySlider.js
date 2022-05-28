import React , {Component}from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { NavLink } from 'react-router-dom';
import "../css/Myslider.css"
class MySlider extends Component {
  state={
    imgFirstPart:'https://image.tmdb.org/t/p/w500',
  }
  render() {
    return (
      <CarouselProvider className='slider'
        naturalSlideWidth={100}
        naturalSlideHeight={19}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0} className="slider__page">
          {this.props.allDetails.slice(5,12).map(movie=>{return(
                                    <div key={movie.id} className="col"><NavLink  className="remove-style" to={movie.title?"/MoviesLand/movie/:" + movie.id:"/serie/:" + movie.id}>
                                    <img src={this.state.imgFirstPart+movie.poster_path} className="d-block  mx-2 img-box" alt=""/>
                                    </NavLink></div>
                                )})}
            </Slide>
          <Slide index={1} className="slider__page">
          {this.props.allDetails.slice(15,22).map(movie=>{return(
                                    <div key={movie.id} className="col"><NavLink  className="remove-style" to={movie.title?"/MoviesLand/movie/:" + movie.id:"/serie/:" + movie.id}>
                                    <img src={this.state.imgFirstPart+movie.poster_path} className="d-block  mx-2 img-box" alt=""/>
                                    </NavLink></div>
                                )})}
            </Slide>
          <Slide index={2} className="slider__page">
          {this.props.allDetails.slice(30,37).map(movie=>{return(
                                    <div key={movie.id} className="col"><NavLink  className="remove-style" to={movie.title?"/MoviesLand/movie/:" + movie.id:"/serie/:" + movie.id}>
                                    <img src={this.state.imgFirstPart+movie.poster_path} className="d-block  mx-2 img-box" alt=""/>
                                    </NavLink></div>
                                )})}
            </Slide>
        </Slider>
        <ButtonBack className='back'>&lt;</ButtonBack>
        <ButtonNext className='next'>&gt;</ButtonNext>
      </CarouselProvider>
    );
  }
}

export default MySlider;