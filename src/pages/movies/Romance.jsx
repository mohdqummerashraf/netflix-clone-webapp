import React, { useEffect, useState } from "react";
import request from "../../request";
import { Box, Container, Grid } from "@material-ui/core";
import Nav from "../../component/header/Nav";
import Banner from "../../component/banner/Banner";
import Moviepage from "../../Moviepage";

function Romance() {
  const [romanceMovie, setRomanceMovie] = useState([]);

  const getRomance = () => {
    fetch(request.fetchRomanceMovies)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (jsondata) {
        return setRomanceMovie(jsondata.results);
      });
  };

  useEffect(() => {
    getRomance();
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
                <h2>Romantic Movie</h2>
              </div>
            </Grid>
            <Grid container>
              {romanceMovie?.length
                ? romanceMovie.map((movie, i) => (
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

export default Romance;
