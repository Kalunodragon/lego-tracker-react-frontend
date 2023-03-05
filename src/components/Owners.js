import React, { useState } from "react";
import OwnerForm from "./OwnerForm"

function Owners(){
  const [showForm, setShowForm] = useState(false)

  function handleClick(){
    setShowForm(s => !s)
  }

  return(
    <>
      <h1>All Owners</h1>
      <button onClick={handleClick}>Add Owner</button>
      {showForm ? <OwnerForm /> : null}
    </>
  )
}

export default Owners