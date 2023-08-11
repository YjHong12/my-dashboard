import React from 'react';
import Typography from '@mui/material/Typography';

function Sidebar() {

  return (
    <>

<br></br><center><Typography component="h1" variant="h4" color="primary">
      The King's Restaurant</Typography>

          <br></br><button type="submit" onClick={() => window.location.href = "" }>Refresh</button></center><br></br>
      </>
  );
};

export default Sidebar;
