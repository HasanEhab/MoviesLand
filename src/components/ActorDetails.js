import  axios  from "axios";
import React ,{Component} from "react";
import "../css/ActorDetails.css"

class ActorDetails extends Component {
    state={
       url:"",
       actorData:[],
       imgFirstPart:'https://image.tmdb.org/t/p/w500'
    }

    static getDerivedStateFromProps(props,state){
        return {
            url:'https://api.themoviedb.org/3/person/'+props.match.params.id.slice(1)+'?api_key=0df234432f8793b594a3b4edddc0e3a0&language=en-US'
        }
    }
    componentDidMount(){
        axios.get(this.state.url)
        .then(data=>{return this.setState({
            actorData:data.data
        })
        
        })
        .catch(err=>console.log(err))
    }

    render(){
        return(
            <div>
                { this.state.actorData.profile_path?
                    <div className="seriesData d-flex  align-items-center flex-wrap">
                        <div className="actorData__img col-lg-6 col-sm-10 offset-sm-1 offset-lg-0">
                        <img src={this.state.imgFirstPart+this.state.actorData.profile_path}/>
                        </div>  
                        <div className="actorData__info col-lg-6 col-sm-10 offset-sm-1 offset-lg-0 ">
                            <div className="actorData__info__title mx-lg-2 mx-4 mt-md-4 mt-lg-0">{this.state.actorData.name}</div>  
                            <div className="actorData__info__date mx-lg-2 mx-4">Birthday : {this.state.actorData.birthday}</div>  
                            <div className="actorData__info__date mx-lg-2 mx-4">Place_Of Birth : {this.state.actorData.place_of_birth}</div>  
                            <div className="actorData__info__rate mx-lg-2 mx-4">Popularity : {this.state.actorData.popularity}</div>  
                            <div className="actorData__info__desc mx-lg-2 mx-4">Overview : {this.state.actorData.biography}</div> 
                        </div>   
                    </div>
                    :''
                }
            </div>

        )
    }
}

export default ActorDetails;