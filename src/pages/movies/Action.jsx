import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import request from "../../request";
import Banner from "../../component/banner/Banner";
import Moviepage from "../../Moviepage";
import Nav from "../../component/header/Nav";

function Action() {
  const [actionMovie, setActionMovie] = useState([]);

  const getAction = () => {
    fetch(request.fetchActionMovies)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (jsondata) {
        return setActionMovie(jsondata.results);
      });
  };

  useEffect(() => {
    getAction();
  }, []);

  return (
    <>
      <Nav />
      <Banner />
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="heading">
                <h2>Action Movie</h2>
              </div>
            </Grid>
            <Grid container spacing={2}>
              {actionMovie?.length
                ? actionMovie.map((movie, i) => (
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

export default Action;
