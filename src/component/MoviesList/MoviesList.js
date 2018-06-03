import React from 'react';
import Movie from './Movie/Movie';
import Aux from '../../hoc/Aux/Aux';
import Style from './MoviesList.css';
const moviesList = (props) => {
   const movies = props.movies;
   const movie = movies.items.map( (each,i) => {
        
    return (
           <Movie key={each.id} {...each} />
       )
   })
   
    return (
        <Aux>
        <h1> {movies.description}</h1>
            <div className = {Style.TilesWrapper}>
            {movie}
            </div>
        </Aux>
    )
}
export default moviesList;