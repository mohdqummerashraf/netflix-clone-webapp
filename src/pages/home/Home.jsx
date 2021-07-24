import React from "react";
import Banner from "../../component/banner/Banner";
import Nav from "../../component/header/Nav";
import Row from "../../component/row/rows/Row";
import request from "../../request";

function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <Row
        title="Trending Movies"
        fetchUrl={request.fetchTrending}
        address="trending-movies"
      />
      <Row
        title="Netflix Original"
        fetchUrl={request.fetchNetflixOriginals}
        address="netflix-original"
      />
      <Row
        title="Action Movies"
        fetchUrl={request.fetchActionMovies}
        address="action-movies"
      />
      <Row
        title="Comedy Movies"
        fetchUrl={request.fetchComedyMovies}
        address="comedy-movies"
      />
      <Row
        title="Romantic Movies"
        fetchUrl={request.fetchRomanceMovies}
        address="romantic-movies"
      />
      <Row
        title="Horror Movies"
        fetchUrl={request.fetchHorrorMovies}
        address="horror-movies"
      />
      <Row
        title="Documentry"
        fetchUrl={request.fetchDocumentries}
        address="documentry"
      />
    </>
  );
}

export default Home;
