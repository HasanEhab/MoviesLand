import  axios  from "axios";
import React ,{Component} from "react";
import "../css/SeriesDetails.css"

class SeriesDetails extends Component {
    state={
       url:"",
       seriesData:[],
       imgFirstPart:'https://image.tmdb.org/t/p/w500'
    }

    static getDerivedStateFromProps(props,state){
        return {
            url:'https://api.themoviedb.org/3/tv/'+props.match.params.id.slice(1)+'?api_key=0df234432f8793b594a3b4edddc0e3a0&language=en-US'
        }
    }
    componentDidMount(){
        axios.get(this.state.url)
        .then(data=>{return this.setState({
            seriesData:data.data
        })
        console.log(data.data)
        })
        .catch(err=>console.log(err))
    }

    render(){
        return(
            <div>
                { this.state.seriesData.backdrop_path?
                    <div className="seriesData d-flex  align-items-center flex-wrap">
                        <div className="seriesData__img col-lg-6 col-sm-10 offset-sm-1 offset-lg-0">
                        <img src={this.state.imgFirstPart+this.state.seriesData.backdrop_path}/>
                        </div>  
                        <div className="seriesData__info col-lg-6 col-sm-10 offset-sm-1 offset-lg-0 ">
                            <div className="seriesData__info__title mx-lg-2 mx-4 mt-md-4 mt-lg-0">{this.state.seriesData.name}</div>  
                            <div className="seriesData__info__date mx-lg-2 mx-4">Genres : {this.state.seriesData.genres.map(gen=>gen.name +" , ")}</div>  
                            <div className="seriesData__info__date mx-lg-2 mx-4">Release Date : {this.state.seriesData.release_date}</div>  
                            <div className="seriesData__info__rate mx-lg-2 mx-4">Rate : {this.state.seriesData.vote_average}</div>  
                            <div className="seriesData__info__desc mx-lg-2 mx-4">Overview : {this.state.seriesData.overview}</div> 
                        </div>   
                    </div>
                    :''
                }
            </div>

        )
    }
}

export default SeriesDetails;
