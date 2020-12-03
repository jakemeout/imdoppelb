import React, { useState, useEffect } from "react";
import env from "react-dotenv";
import axios from "axios";
import { Button } from "@material-ui/core";

import MovieCarousel from "./MovieCarousel";

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
    height: "40px"
  };

  const renderMovies = () => {
    return data?.results?.length && <MovieCarousel data={data} />;
  };

  //In lieu of the type="submit" typically on a form, using this keypress for mimicing the return functionality to smoothen the experience
  const handleKeypress = (e) => {
        if(e.key === "Enter"){
          return setUrl(
            `https://api.themoviedb.org/3/search/movie?api_key=${env.M_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
          )
        }
  }

  return (
    <>
      <div style={{ marginTop: "5%", textAlign: "center" }}>
   
        <input
          style={BarStyling}
          onKeyPress={handleKeypress}
          key="random1"
          value={query}
          placeholder={"search a movie title"}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          style={{height: "40px", padding: "8px", marginBottom: "4px"}}
          onClick={() =>
            setUrl(
              `https://api.themoviedb.org/3/search/movie?api_key=${env.M_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
            )
          }
        >
          Search!
        </Button>
      
      </div>
      {renderMovies()}
    </>
  );
};

export default Searchbar;
