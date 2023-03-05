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
    .then(d => {
      console.log(d)
      const newList = [...allSets, d].sort((a, b) => a.name > b.name ? 1 : -1)
      setAllSets(newList)
    })
  }

  function handleUpdate(updateSubmissioin){
    fetch("http://localhost:9292/lego_sets/patch",{
      method: "PATCH",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify(updateSubmissioin)
    })
    .then(r => r.json())
    .then(d => updateAllSets(d))
  }

  function updateAllSets(setToUpdate){
    const updated = allSets.map(set => {
      if (set.id === setToUpdate.id){
        return setToUpdate
      } else {
        return set
      }
    })
    window.alert(setToUpdate.name + ": has been updated") 
    setAllSets(updated)
  }

  function handleDelete(idToDelete, nameOfSet){
    console.log(idToDelete, nameOfSet)
    fetch(`http://localhost:9292/lego_set/${idToDelete}`,{
      method: "DELETE"
    })
    .then(r => r.json())
    .then(d => {
      const updatedList = allSets.filter(set => set.id !== d.id)
      setAllSets(updatedList)
    })
    window.alert(nameOfSet + ": And its notes have been deleted from the list.")
  }

  const displayForm = showForm === false ? <LegoSetForm onHandleSubmit={handleSubmit}/> : null
  const addLegoSetButton = showForm === true ? "Add New Set" : "Hide Form"

  let setsToDisplay
  let count = 0
  if(allSets !== null) setsToDisplay = allSets.map(set => {
    count++
      return (<OneLegoSet
        key={set.name + count}
        name={set.name}
        setNumber={set.set_number}
        pieces={set.peices}
        theme={set.theme.theme}
        notes={set.notes}
        age={set.age}
        onUpdate={handleUpdate}
        setId={set.id}
        onDelete={handleDelete}
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