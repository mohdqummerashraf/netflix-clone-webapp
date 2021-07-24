import { Box, Grid } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Signup from "../signup/Signup";
import "./loginstyle/Login.css";

function Login() {
  const [signin, setSignin] = useState(false);
  return (
    <>
      <Box className="login_bg">
        <Grid container>
          <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="login-nav">
              <img
                src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
                alt=""
              />
              <button onClick={() => setSignin(true)}>Sign In</button>
            </div>
          </Grid>
          <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
            {signin ? (
              <Signup />
            ) : (
              <div className="login_content">
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere, Cancel at any time.</h2>
                <h3>
                  Ready to watch ? Enter your email to create or restart your
                  membership
                </h3>
                <div className="login_input">
                  <form action="">
                    <input type="email" placeholder="Email Address" />
                    <button type="submit" onClick={() => setSignin(true)}>
                      GET STARTED
                    </button>
                  </form>
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Login;
