import React, { useState } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [navbg, setNavbg] = useState(false);

  window.onscroll = () => {
    setNavbg(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <>
      <Box className={`head ${navbg && "head_black"}`}>
        <Container>
          <Grid container>
            <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
              <header id="logo">
                <Link to="/">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/800px-Logonfx.png"
                    alt=""
                    srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/800px-Logonfx.png"
                  />
                </Link>
                {/*  <div className="nav_page">
                  <span>Homepage</span>
                  <span>Series</span>
                  <span>Movies</span>
                  <span>New and Popular</span>
                  <span>My List</span>
                </div> */}
              </header>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <header id="user">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                  alt=""
                  srcset=""
                />
                {/*  <SearchIcon id="search"></SearchIcon>
                <NotificationsIcon></NotificationsIcon> */}
              </header>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Nav;
