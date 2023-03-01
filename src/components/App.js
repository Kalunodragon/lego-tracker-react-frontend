import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import LegoSets from "./LegoSets"
import Owners from "./Owners"

function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route exact path="/lego_sets">
          <LegoSets />
        </Route>
        <Route exact path="/owners">
          <Owners />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
