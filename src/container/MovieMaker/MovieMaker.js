import React,{Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import MoviesList from '../../component/MoviesList/MoviesList';
import axios from 'axios';
class MovieMaker extends Component {
    
    state = {
        search: '',
        movies: "",
    }
        movieDetailHandler = (id) => {
                this.props.history.push({
                    pathname: "/movie/"+id
                })
        }

        componentDidMount() {
            axios.get("/3/list/3")
                .then( res => {                    
                    this.setState({
                        movies: res.data
                    })
                })
                .catch( err => console.log(err))
        }

render() {
        
    const movies = this.state.movies ? <MoviesList movies={this.state.movies} clicked={this.movieDetailHandler}/> : "waiting to load" 
            
        return(
            <Aux>
               {movies}
            </Aux>
        )
    }
}

export default MovieMaker;