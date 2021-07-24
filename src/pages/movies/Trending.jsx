import React, { useEffect, useState } from "react";
import request from "../../request";
import { Box, Container, Grid } from "@material-ui/core";
import Nav from "../../component/header/Nav";
import Banner from "../../component/banner/Banner";
import Moviepage from "../../Moviepage";

function Trending() {
  const [trendMovie, setTrendMovie] = useState([]);

  const getMovie = () => {
    fetch(request.fetchTrending)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (jsondata) {
        return setTrendMovie(jsondata.results);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.table(trendMovie);

  return (
    <>
      <Nav />
      <Banner />
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="heading">
                <h2>Trending Movie</h2>
              </div>
            </Grid>
            <Grid container spacing={2}>
              {trendMovie?.length
                ? trendMovie.map((movie, i) => (
                    <Moviepage
                      key={i}
                      title={movie.title}
                      poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    />
                  ))
                : ""}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Trending;
