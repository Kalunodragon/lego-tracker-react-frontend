import React, { useEffect, useState } from "react";


function App() {
  const [state, setState] = useState()

  useEffect(() => {
    fetch("http://localhost:9292/lego_sets")
    .then(resp.json())
    .then(console.log(d))
  },[])

  return (
    <div className="App">
      <h1>testing</h1>
    </div>
  );
}

export default App;
