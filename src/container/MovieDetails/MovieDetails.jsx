import React,{Component} from 'react';
import axios from 'axios';
import Style from './MovieDetails.css'
import Cast from './MovieCast/MovieCast';
class MovieDetails extends Component {


    state = {
        movieDetails: "",
        cast: [],
    }

    componentDidMount() {
      
    const movieId = this.props.match.params.movieid
      axios.all([
        axios.get("/3/movie/" + movieId),
        axios.get("/3/movie/" + movieId+"/credits")
      ])
        .then(axios.spread((mRes, cRes) => {
          // do something with both responses
          const fetchMovieDetails = { ...mRes.data };
          const fetchCastData = {...cRes.data.cast};
          this.setState({
            movieDetails: fetchMovieDetails,
            cast: fetchCastData
          })
        }
        ))
      }
/* 
        axios.get("/3/movie/"+movieId)
        .then( res => {
            const fetchMovieDetails = {...res.data};
            this.setState({
                movieDetails: fetchMovieDetails
            }) 
        }).catch(err => console.log(err))
    } */

    render() {
      let rendermovie, rendercast;
      if(this.state.movieDetails && this.state.cast){        
      let movieData = { ...this.state.movieDetails,
                       poster_path: "https://image.tmdb.org/t/p/w400" + this.state.movieDetails.poster_path,
        backdrop_path: "https://image.tmdb.org/t/p/w1280" + this.state.movieDetails.backdrop_path,
                      };
      var sectionStyle = {
        width: "90%",
        height: "500px",
        backgroundImage: `url( ${movieData.backdrop_path })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: "-1",
      };

        rendermovie = (
          <div className={Style.fade}>
            <div className={Style.MovieDetails} style={sectionStyle}>
              <div className={Style.Poster}>
                <img src={movieData.poster_path} alt={movieData.title} />
              </div>
              <div className={Style.Desc}>
                <h2>{movieData.title} ({movieData.popularity})</h2>
                <b>{movieData.tagline}</b>
                <br/>
                <br/>
                {movieData.production_companies[0].name}
                <br/>
                <br/>
                <div><b>Overview:</b></div>
                <p>{movieData.overview}</p>
              </div>
            </div>
            <div className={Style.Cast}>
              <h2>Top 10 Movie Cast</h2>

            </div>
          </div>
        )
        
        let topCast = []
        for(let i = 0 ; i < 10 ; i++){
            topCast.push(this.state.cast[i])
        }
        rendercast = topCast.map( (each , i) => <Cast key={i} {...each}/>)
        

    }
     
     
    return (
      <div>
        {rendermovie}
        <div className={Style.CastWrap}>
        {rendercast}
        </div>
      </div>
    )
}
}

export default MovieDetails;


/* {
  "adult": false,
  "backdrop_path": "/UJ8KVc7Qqy4t95ATlYzdGaUILn.jpg",
  "belongs_to_collection": null,
  "budget": 0,
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    }
  ],
  "homepage": null,
  "id": 297797,
  "imdb_id": "tt4120636",
  "original_language": "en",
  "original_title": "Green Lantern Corps",
  "overview": "A group of humans join the Green Lantern Corps, an alien interstellar police force that protects the universe.",
  "popularity": 2.060061,
  "poster_path": "/qtMjHsEyD2sck9748PaUwthW8JR.jpg",
  "production_companies": [
    {
      "id": 429,
      "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
      "name": "DC Comics",
      "origin_country": "US"
    },
    {
      "id": 9993,
      "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
      "name": "DC Entertainment",
      "origin_country": "US"
    },
    {
      "id": 174,
      "logo_path": "/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png",
      "name": "Warner Bros. Pictures",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2020-07-24",
  "revenue": 0,
  "runtime": null,
  "spoken_languages": [
    {
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Planned",
  "tagline": "",
  "title": "Green Lantern Corps",
  "video": false,
  "vote_average": 0,
  "vote_count": 0
} */