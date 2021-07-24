import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import request from "../../request";
import "./banner.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Banner() {
  const [movie, setMovie] = useState([]);

  const getMovie = () => {
    fetch(request.fetchNetflixOriginals)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (jsondata) {
        return setMovie(
          jsondata.results[
            Math.floor(Math.random() * jsondata.results.length - 1)
          ]
        );
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <Box
        className="banner-bg Box"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}"`,
          backgroundPosition: "center top ",
          width: "100%",
        }}
      >
        <Grid container>
          <Grid item xl={12} lg={12}>
            <div className="banner-content">
              <h1 className="banner-title">
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <h1 className="banner-description">
                {truncate(movie?.overview, 200)}
              </h1>
              <div className="banner_btns">
                <button className="play">
                  <PlayArrowIcon className="icon" />
                  <span>Play</span>
                </button>
                <button className="info">
                  <InfoOutlinedIcon className="icon" />
                  My List
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="banner-gradient"></div>
      </Box>
    </>
  );
}

export default Banner;
