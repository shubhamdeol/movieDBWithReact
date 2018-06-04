import React from 'react';
import Style from './MovieCast.css';

const movieCast = (props) => {
    let cast = {...props, 
        profile_path: "https://image.tmdb.org/t/p/w200"+ props.profile_path
    }
    console.log(cast);
    return(
        <div className={Style.Cast}>
                <img src={cast.profile_path} alt={cast.character}/>
            <div className={Style.Desc}>
                <h5>Name:{cast.name}</h5>
                <h5>Character played:{cast.character}</h5>
            </div>
        </div>
    )
}

export default movieCast;

    //   "cast_id": 0,
    //   "character": "Diana Prince / Wonder Woman",
    //   "credit_id": "543ff227c3a3680544000009",
    //   "gender": 1,
    //   "id": 90633,
    //   "name": "Gal Gadot",
    //   "order": 0,
    //   "profile_path": "/hzt1aV8FzEJlUtiWtrGSHlcdGCx.jpg"
    