import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import LegoSets from "./LegoSets"
import Owners from "./Owners"

function App() {
  const [legoSets, setlegoSets] = useState(null)

  useEffect(() => {
    fetch("http://localhost:9292/lego_sets")
    .then(r => r.json())
    .then(d => setlegoSets(d))
  },[])

  if(!legoSets) return <h1>LOADING...</h1>

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route exact path="/lego_sets">
          <LegoSets legoSets={legoSets}/>
        </Route>
        <Route exact path="/owners">
          <Owners />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
