import React from 'react';
import Movie from './Movie/Movie';
import Aux from '../../hoc/Aux/Aux';
import Style from './MoviesList.css';
//import SearchButton from '../SearchButton/SearchButton';
import Search from '../../container/Search/Search';
const moviesList = (props) => {
   const movies = props.movies;
   const movie = movies.items.map( (each,i) => {
        
    return (
                <Movie {...each} key={each.id} clicked={() => props.clicked(each.id)}/>
           )
       })
       
        return (
        <Aux>
            <div className={Style.Search}> 
                    <h1 style={{ color: "#0A8406", textAlign: "center" }}> {movies.description}</h1>   
                <Search />
            </div>
            <div className = {Style.TilesWrapper}>
            {movie}
            </div>
        </Aux>
    )
}
export default moviesList;