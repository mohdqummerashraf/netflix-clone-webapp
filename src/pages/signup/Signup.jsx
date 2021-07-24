import { Box, Grid } from "@material-ui/core";
import React from "react";
import "./signupstyle/signup.css";

function Signup() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xl={12} lg={12} md={12}>
            <div className="signup">
              <form action="">
                <h1>Sign In</h1>
                <input type="email" placeholder="Email" />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <button type="submit">Sign In</button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Signup;
