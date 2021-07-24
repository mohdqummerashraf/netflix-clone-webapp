import React, { useEffect, useState } from "react";
import request from "../../request";
import { Box, Container, Grid } from "@material-ui/core";
import Moviepage from "../../Moviepage";
import Nav from "../../component/header/Nav";
import Banner from "../../component/banner/Banner";

function Comedy() {
  const [comedyMovie, setComedyMovie] = useState([]);

  const getComedy = () => {
    fetch(request.fetchComedyMovies)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (jsondata) {
        return setComedyMovie(jsondata.results);
      });
  };

  useEffect(() => {
    getComedy();
  }, []);

  console.table(comedyMovie);

  return (
    <>
      <Nav />
      <Banner />
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="heading">
                <h2>Comedy Movie</h2>
              </div>
            </Grid>
            <Grid container>
              {comedyMovie?.length
                ? comedyMovie.map((movie, i) => (
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

export default Comedy;
