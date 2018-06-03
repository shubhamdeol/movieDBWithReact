import React from 'react';
import Movie from './Movie/Movie';
import Aux from '../../hoc/Aux/Aux';
import Style from './MoviesList.css';
import SearchButton from '../SearchButton/SearchButton';

const moviesList = (props) => {
   const movies = props.movies;
   const movie = movies.items.map( (each,i) => {
        
    return (
                <Movie {...each} key={each.id} clicked={() => props.clicked(each.id)}/>
           )
       })
       
        return (
        <Aux>
                <h1 style={{ "color": "rgb(48, 145, 181)"}}> {movies.description}</h1>
                <SearchButton />
            <div className = {Style.TilesWrapper}>
            {movie}
            </div>
        </Aux>
    )
}
export default moviesList;