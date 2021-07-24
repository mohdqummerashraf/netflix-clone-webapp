import React, { useEffect, useState } from "react";
import request from "../../request";
import { Box, Container, Grid } from "@material-ui/core";
import Nav from "../../component/header/Nav";
import Banner from "../../component/banner/Banner";
import Moviepage from "../../Moviepage";

function Netflixoriginal() {
  const [originalMovie, setOriginalMovie] = useState([]);

  const getOriginal = () => {
    fetch(request.fetchTrending)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (jsondata) {
        return setOriginalMovie(jsondata.results);
      });
  };

  useEffect(() => {
    getOriginal();
  }, []);

  console.table(originalMovie);

  return (
    <>
      <Nav />
      <Banner />
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="heading">
                <h2>Netflix Original</h2>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            {originalMovie?.length
              ? originalMovie.map((movie, i) => (
                  <Moviepage
                    key={i}
                    title={movie.title}
                    poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  />
                ))
              : ""}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Netflixoriginal;
