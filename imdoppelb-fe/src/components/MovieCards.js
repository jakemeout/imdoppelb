import React from "react";
import { Button } from '@material-ui/core';

const MovieCards = ({movie}) => {
    return (
       <>
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" />
            <h4>{movie.title}</h4>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
            <Button>👍</Button>
            <Button>👎</Button>
        </div>
     </>
    );
  };
  
  export default MovieCards;
  