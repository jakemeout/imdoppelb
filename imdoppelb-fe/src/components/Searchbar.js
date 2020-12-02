import React, { useState, useEffect } from "react";
import env from "react-dotenv";
import axios from "axios";
import { Button } from "@material-ui/core";
import Carousel from "react-bootstrap/Carousel";

const Searchbar = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/search/movie?api_key=${env.M_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      setData(result.data);
    };

    fetchData();
  }, [url]);

  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderMovieCards = () => {
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

  return (
    <>
      <div style={{ marginTop: "5%", textAlign: "center" }}>
        <input
          style={BarStyling}
          key="random1"
          value={query}
          placeholder={"search a movie title"}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          type="button"
          onClick={() =>
            setUrl(
              `https://api.themoviedb.org/3/search/movie?api_key=${env.M_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
            )
          }
        >
          Search!
        </Button>
      </div>
      <div>{renderMovieCards()}</div>
    </>
  );
};

export default Searchbar;
