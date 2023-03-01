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
      <h1 key={set.name}>{set.name}</h1>
    )
  })

  if (!state) {
    return (
      <h1>Loading</h1>
    )
  }

  return (
    <div className="App">
      {display}
    </div>
  );
}

export default App;
