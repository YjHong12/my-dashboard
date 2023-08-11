import React from "react";
import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
import TransactionLog from "./components/TransactionLog";
// import Toolbar from "@mui/material/Toolbar";
// import Dashboard from "./components/Dashboard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveDrawer from "./components/Drawer"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#C07F80",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

// Create a header, sidebar, and transaction bar (DISREGARD CHARTS) with MUI components
// Populate at least one of the components with data from the JSONs
// Create at least one event that changes something on the screen with a handler function

function App() {
  return (
    <> 
      <ThemeProvider theme={theme}>
        {" "}
        <CssBaseline />
        <ResponsiveDrawer />
        <main>
          <Header />
          {/* <Dashboard /> */}
          {/* <Toolbar>
            <Sidebar />
          </Toolbar> */}
          <TransactionLog />
        </main>
      </ThemeProvider>
      ;
    </>
  );
}

export default App;
