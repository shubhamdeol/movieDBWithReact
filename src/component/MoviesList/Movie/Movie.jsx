import React from 'react';
import Style from './Movie.css';
import Button from '../../../UI/Button/Button';

const movie = (props) => {
    const movieTileData = { ...props, poster_path: "https://image.tmdb.org/t/p/w200"+props.poster_path }
    return(
        <div className = {Style.MovieTile}>
           
                <div className={Style.WrapTile}>
                    <div className={Style.WrapImg}>
                    <img src={movieTileData.poster_path} alt={movieTileData.title} />
                    </div>
                    
                    <div className={Style.WrapWrapTile}>
                        <h5>{movieTileData.title}
                        <br/>
                        <span>Releasing On: {movieTileData.release_date}</span>
                        </h5>
                    <div className={Style.Votes}>
                        <span>Votes:{movieTileData.vote_count}</span>
                    <br/>
                    <span>Avg Votes:{movieTileData.vote_average}</span>
                    </div>
                    <Button clicked={props.clicked} btnType="Success">
                        View Details
                    </Button>
                   
                    </div>
                    
                </div>
           
        </div>
    )
}
export default movie;
/* 
 "vote_average": 0,
      "vote_count": 2,
      "id": 298622,
      "video": false,
      "media_type": "movie",
      "title": "Cyborg",
      "popularity": 3.624937,
      "poster_path": "/3qHZNA1hHAb3ySMlFB90susKwPT.jpg",
      "original_language": "en",
      "original_title": "Cyborg",
      "genre_ids": [
        12,
        28,
        878
      ],
      "backdrop_path": "/wzGiqDNBFzSnqIdpaMzVQm758j0.jpg",
      "adult": false,
      "overview": "",
      "release_date": "2020-04-03" */