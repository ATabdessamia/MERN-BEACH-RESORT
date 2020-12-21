/* eslint-disable jsx-a11y/anchor-is-valid */
import { Router, Route } from "react-router-dom";
import history from "./history";

import React from "react";
import Home from "./screens/Home";
import RoomsScreen from "./screens/RoomsScreen";
import RoomInfo from "./screens/RoomInfo";
const App = () => {
  return (
    <Router history={history}>
      <Route path="/" exact component={Home} />
      <Route path="/rooms" exact component={RoomsScreen} />
      <Route path="/rooms/:slug" exact component={RoomInfo} />
    </Router>
  );
};

export default App;
