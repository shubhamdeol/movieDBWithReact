import React,{Component} from 'react';
import axios from 'axios';
class MovieDetails extends Component {


    state = {
        movieDetails: ""
    }

    componentDidMount() {
    const movieId = this.props.match.params.movieid
        axios.get("/3/movie/"+movieId).then( res => {
            const fetchMovieDetails = {...res.data};
            this.setState({
                movieDetails: fetchMovieDetails
            }) 
        }).catch(err => console.log(err))
    }

    render() {        
    return (
        <div>
            <h2>{this.state.movieDetails.title}</h2>
            <p>{this.state.movieDetails.overview}</p>
        </div>
    )
}
}

export default MovieDetails;