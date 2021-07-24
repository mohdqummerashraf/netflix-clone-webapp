import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Show(props) {
  const { title, poster } = props;
  const [trailerUrl, settrailerUrl] = useState("");

  const handletrailer = (title) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(title || "")
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
      <Grid xl={2} lg={2} md={3} sm={3} xs={4} spacing={3}>
        <div>
          <img
            onClick={() => handletrailer(title)}
            src={poster}
            alt={title}
            srcset=""
            style={{ width: "100%", padding: "5px 10px" }}
            className="movie-poster"
          />
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </Grid>
    </>
  );
}

export default Show;
