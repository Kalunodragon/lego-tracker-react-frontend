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
  },[])

  function handleShowForm(){
    setShowForm(v => !v)
  }

  function handleSubmit(submission){
    fetch("http://localhost:9292/lego_sets",{
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify(submission)
    })
    .then(r => r.json())
    .then(d => setAllSets(...allSets, d))
  }

  // Needs to be connected to the update form
  function handleUpdate(updateSubmissioin){
    fetch("http://localhost:9292/lego_sets",{
      method: "PATCH",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify(updateSubmissioin)
    })
    .then(r => r.json())
    .then(d => handleUpdatedLegoSet(d))
  }

  function handleUpdatedLegoSet(setToUpdate){
    const updated = allSets.map(set => {
      if (set.id === setToUpdate.id){
        return setToUpdate
      } else {
        return set
      }
    }) 
    setAllSets(updated)
  }

  const displayForm = showForm === false ? <LegoSetForm onHandleSubmit={handleSubmit}/> : null
  const addLegoSetButton = showForm === true ? "Add New Set" : "Hide Form"

  let setsToDisplay
  if(allSets !== null) setsToDisplay = allSets.map(set => {
      return (<OneLegoSet
        key={set.name}
        name={set.name}
        setNumber={set.set_number}
        pieces={set.peices}
        theme={set.theme.theme}
        notes={set.notes}
        age={set.age}
        onUpdate={handleUpdate}
        setId={set.id}
        // needs some callback for update form
      />)
  })

  return(
    <>
      <h1>Current Combined Collection!</h1>
      <button className="create-update" onClick={handleShowForm}>{addLegoSetButton}</button>
      <p>Here is a list of all current LEGO sets within the joint collection of all owners.</p>
      {displayForm}
      {setsToDisplay}
    </>
  )
}

export default LegoSets