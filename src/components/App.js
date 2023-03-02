import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import LegoSets from "./LegoSets"
import Owners from "./Owners"

function App() {
  const [testing, setTesting] = useState(null)
  const [themes, setThemes] = useState(null)
  let allThemes

  useEffect(() => {
    fetch("http://localhost:9292/lego_sets")
    .then(r => r.json())
    .then(d => setTesting(d))
  },[])

  if(testing !== null) allThemes = (testing.map(set => set.theme.theme))
  const uniqueThemes = [...new Set(allThemes)]
  console.log(uniqueThemes)

  // const allThemes = testing.map(theme => theme.theme.theme)
  // const uniqueThemes = [...new Set(allThemes)]
  // if(themes !== uniqueThemes) setThemes(uniqueThemes)

  if(!testing) return <h1>LOADING...</h1>

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route exact path="/lego_sets">
          <LegoSets themeOptions={uniqueThemes}/>
        </Route>
        <Route exact path="/owners">
          <Owners />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
