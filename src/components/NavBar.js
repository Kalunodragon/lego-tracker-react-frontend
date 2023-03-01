import React from "react";
import { useHistory } from "react-router-dom";

function NavBar(){
  const history = useHistory()

  function handleButtonClick(e){
    const btn = e.target.name
    if (btn === "home"){
      history.push("/")
    }
    if (btn === "sets"){
      history.push("/lego_sets")
    }
    if (btn === "owners"){
      history.push("/owners")
    }
  }

  return(
    <>
      <h1>Select a page by using the navigation buttons</h1>
      <button onClick={handleButtonClick} name="home">Home</button>
      <button onClick={handleButtonClick} name="sets">Lego Sets</button>
      <button onClick={handleButtonClick} name="owners">Owners</button>
    </>
  )
}

export default NavBar