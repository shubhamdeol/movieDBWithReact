import React,{Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import MoviesList from '../../component/MoviesList/MoviesList';
import axios from 'axios';
class MovieMaker extends Component {
    
    state = {
        search: '',
        movies: ""
    }
    
        componentDidMount() {
            axios.get("https://api.themoviedb.org/3/list/3?api_key=bbae21037470474bef1ed1150be432a3&language=en-US")
                .then( res => {
                    
                    this.setState({
                        movies: res.data
                    })
                }

                )
        }

render() {
        
    const movies = this.state.movies ? <MoviesList movies={this.state.movies} /> : "waiting to load" 
            
        return(
            <Aux>
            
            {movies}

            </Aux>
        )
    }
}

export default MovieMaker;