import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import "./rowstyle/rows.css";

import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row(props) {
  const { title, fetchUrl, address } = props;
  const [movies, setMovies] = useState([]);
  const [scrollmove, setScrollmove] = useState(false);
  const [arrow, setArrow] = useState("hidden");
  const [trailerUrl, settrailerUrl] = useState("");

  const getMovies = () => {
    fetch(fetchUrl)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (jsondata) {
        return setMovies(jsondata.results);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const ref = useRef(null);

  const handleClk = (scrollOffset) => {
    setScrollmove(true);
    ref.current.scrollLeft += scrollOffset;
  };

  const enterArrow = () => {
    setArrow("visible");
  };

  const handletrailer = (movie) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
        })
        .catch(() => {
          console.log("temporary unable");
        });
    }
  };

  const opts = {
    height: "390",
    width: "400",

    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={3}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="heading">
                <nav>
                  <ul>
                    <li>
                      <Link to={`/${address}`}>{title}</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Grid>
          </Grid>
        </Container>

        <div className="wrapper">
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClk(-500)}
            style={({ visibility: arrow }, { display: !scrollmove && "none" })}
          />

          <div
            className="row-poster"
            ref={ref}
            onMouseEnter={() => enterArrow()}
          >
            {movies?.length
              ? movies.map((movie, i) => (
                  <img
                    onClick={() => handletrailer(movie)}
                    className="poster"
                    key={i}
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                  />
                ))
              : ""}
          </div>

          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClk(500)}
            style={{ visibility: arrow }}
          />
        </div>
        <Container>
          {" "}
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </Container>
      </Box>
    </>
  );
}

export default Row;
