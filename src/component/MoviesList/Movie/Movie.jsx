import React from 'react';
import Style from './Movie.css';

const movie = (props) => {
    const movieTileData = { ...props, poster_path: "https://image.tmdb.org/t/p/w200"+props.poster_path }
    return(
        <div className = {Style.MovieTile}>
           <div >
                <div className={Style.WrapTile}>
                    <img src={movieTileData.poster_path} alt={movieTileData.title}/>
                    <div className={Style.WrapWrapTile}>
                        <h4>{movieTileData.title}</h4>
                        <h5>{movieTileData.release_date}</h5>
                        <p>{movieTileData.overview}</p>
                    </div>
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