import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Add } from "./components/Add";
import { Header } from "./components/Header";
import { Watched } from "./components/Watched";
import { Watchlist } from "./components/Watchlist";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import {GlobalProvider} from './context/GlobalState'

export const App = () => {
  return (
    <GlobalProvider>
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Watchlist} />
        <Route path="/watched" component={Watched} />
        <Route path="/add" component={Add} />
      </Switch>
    </Router>
    </GlobalProvider>
  );
};
