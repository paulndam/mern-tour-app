import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import {
  Navbar,
  Home,
  Register,
  Login,
  Profile,
} from "./allcomponents/AllComponents.jsx";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/custom/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default hot(module)(App);
