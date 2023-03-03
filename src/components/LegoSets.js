import React, { useEffect, useState } from "react";
import LegoSetForm from "./LegoSetForm"
import OneLegoSet from "./OneLegoSet";

function LegoSets(){
  const [showForm, setShowForm] = useState(true)
  const [allSets, setAllSets] = useState(null)
  
  useEffect(() => {
    fetch("http://localhost:9292/lego_sets")
    .then(r => r.json())
    .then(d => setAllSets(d))
  })

  function handleShowForm(){
    setShowForm(v => !v)
  }

  const displayForm = showForm === false ? <LegoSetForm /> : null
  const addLegoSetButton = showForm === true ? "New Set" : "Hide Form"
  
  const showAllSets = allSets.map(set => {
    return(
      <OneLegoSet
        name={set.name}
        setNumber={set.set_number}
        pieces={set.peices}
        theme={set.theme.theme}
        notes={set.notes}
        />
    )
  })

  return(
    <>
      <h1>Set Test</h1>
      <button className="form-submit" onClick={handleShowForm}>{addLegoSetButton}</button>
      {displayForm}
      {showAllSets}
    </>
  )
}

export default LegoSets