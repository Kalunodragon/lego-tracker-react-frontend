import React, { useEffect, useState } from "react";


function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/lego_sets")
    .then(r => r.json())
    .then(d => {
      console.log(d)
      setState(d)
    })
  },[])

  const display = state.map(set => {
    return(
      <div className="Sets">
        <h1 key={set.name}>{set.name}</h1>
        <p>Number of peices: {set.peices}</p>
        <p>Set number: {set.number}</p>
      </div>
    )
  })

  if (!state) {
    return (
      <h1>Loading</h1>
    )
  }

  return (
    <grid className="App">
      {display}
    </grid>
  );
}

export default App;
