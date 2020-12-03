import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "@material-ui/core";

const MovieCarousel = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  
// const fetchThumbs = (id) => {
//     fetch(`http://localhost:3001/movies/${id}`, {
//       method: "GET",
//       headers: {
//         "content-type": "application/json",
//       }).then(resp => resp.json()).then(resp => console.log(resp))
// }

// const renderThumbs = () => {

// }

// const postThumbs = () => {

// }

  if (!data?.results?.length) return null;
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{
        margin: "auto",
        marginTop: "30px",
        width: "600px",
        height: "600px",
        backgroundColor: "#e2e2e2",
      }}
    >
      {data?.results?.map((movie) => (
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            style={{ height: "800px" }}
            alt={`${movie.title}`}
            data-holder-rendered="true"
          />
          <Carousel.Caption style={{ color: "white" }}>
            <h3>{movie.title}</h3>
            <h4>Release Date: {movie.release_date}</h4>

            <p>{movie.overview}</p>
            <Button>👍</Button>
            <Button>👎</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
