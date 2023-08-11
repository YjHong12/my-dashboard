import React from "react";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <>
      <center>
        <Typography component="h1" variant="h1" color="primary">
          DASHBOARD
        </Typography>
        <p>
          <h2>Welcome to your Dashboard!</h2>
        </p>
      </center>
    </>
  );
}

export default Header;
