import React, { useEffect, useState } from "react";
import request from "../../request";
import { Box, Container, Grid } from "@material-ui/core";
import Nav from "../../component/header/Nav";
import Banner from "../../component/banner/Banner";
import Moviepage from "../../Moviepage";

function Documentry() {
  const [documentMovie, setDocumentMovie] = useState([]);

  const getDocumentry = () => {
    fetch(request.fetchDocumentries)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (jsondata) {
        return setDocumentMovie(jsondata.results);
      });
  };

  useEffect(() => {
    getDocumentry();
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
                <h2>Documentry</h2>
              </div>
            </Grid>

            <Grid container>
              {documentMovie?.length
                ? documentMovie.map((movie, i) => (
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

export default Documentry;
