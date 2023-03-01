import React, { useEffect, useState } from "react";


function Home() {
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
      <div  key={set.name} className="Sets">
        <h1>{set.name}</h1>
        <p>Number of peices: {set.peices}</p>
        <p>Set number: {set.set_number}</p>
        <p>Theme: {set.theme.theme}</p>
      </div>
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

export default Home;
