import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import baseTheme from "./Themes/index";
import BoxComponent from "./Components/Organisms/Login";
import MyTemplate from "./Components/Templates/BasicTemplate";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        <MyTemplate />
      </ThemeProvider>
    </div>
  );
}

export default App;
