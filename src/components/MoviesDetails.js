import  axios  from "axios";
import React ,{Component} from "react";
import "../css/MoviesDetails.css"

class MoviesDetails extends Component {
    state={
       url:"",
       movieData:[],
       imgFirstPart:'https://image.tmdb.org/t/p/w500'
    }

    static getDerivedStateFromProps(props,state){
        return {
            url:'https://api.themoviedb.org/3/movie/'+props.match.params.id.slice(1)+'?api_key=0df234432f8793b594a3b4edddc0e3a0&language=en-US'
        }
    }
    componentDidMount(){
        axios.get(this.state.url)
        .then(data=>{return this.setState({
            movieData:data.data
        })
        console.log(data.data)
        })
        .catch(err=>console.log(err))
    }

    render(){
        return(
            <div>
                { this.state.movieData.backdrop_path?
                    <div className="movieData d-flex  align-items-center flex-wrap">
                        <div className="movieData__img col-lg-6 col-sm-10 offset-sm-1 offset-lg-0">
                        <img src={this.state.imgFirstPart+this.state.movieData.backdrop_path}/>
                        </div>  
                        <div className="movieData__info col-lg-6 col-sm-10 offset-sm-1 offset-lg-0 ">
                            <div className="movieData__info__title mx-lg-2 mx-4 mt-md-4 mt-lg-0">{this.state.movieData.title}</div>  
                            <div className="movieData__info__date mx-lg-2 mx-4">Genres : {this.state.movieData.genres.map(gen=>gen.name +" , ")}</div>  
                            <div className="movieData__info__date mx-lg-2 mx-4">Release Date : {this.state.movieData.release_date}</div>  
                            <div className="movieData__info__rate mx-lg-2 mx-4">Rate : {this.state.movieData.vote_average}</div>  
                            <div className="movieData__info__desc mx-lg-2 mx-4">Overview : {this.state.movieData.overview}</div> 
                        </div>   
                    </div>
                    :''
                }
            </div>

        )
    }
}

export default MoviesDetails;

// backdrop_path
// overview
// title
// release_date
// vote_average
