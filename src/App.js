import React from "react";
// import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Starred from "./Pages/Starred";

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    
      <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path='/show/:id'>
        <Show/>
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
      </Switch>
      </ThemeProvider>
    
  );
}

export default App;
