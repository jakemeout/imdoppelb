import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "@material-ui/core";

const MovieCarousel = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [thumbsUp, setThumbsUp] = useState(0);
  const [thumbsDown, setThumbsDown] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    const selectedMovieId = data?.results?.[selectedIndex]?.id;
    if (selectedMovieId) {
      fetch(`http://localhost:3001/api/movies/${selectedMovieId}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => {
          setThumbsDown(resp.thumbsDown);
          setThumbsUp(resp.thumbsUp);
        });
    }
  };

  useEffect(() => {
    handleSelect(0);
  }, []);

  const postThumbs = (movie, isThumbsUp = true) => {
    let updatedThumbs = (isThumbsUp ? thumbsUp : thumbsDown || 0) + 1;
    fetch(`http://localhost:3001/api/movies/${movie.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(
        isThumbsUp ? { thumbsUp: updatedThumbs } : { thumbsDown: updatedThumbs }
      ),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setThumbsDown(resp.thumbsDown);
        setThumbsUp(resp.thumbsUp);
      });
  };

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
            <Button onClick={() => postThumbs(movie, true)}>👍</Button>
            {thumbsUp}
            <Button onClick={() => postThumbs(movie, false)}>👎</Button>
            {thumbsDown}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
