import React, { useEffect, useState } from "react";
import IndividualOwner from "./IndividualOwner";
import OwnerForm from "./OwnerForm"
import OwnerNoteForm from "./OwnerNoteForm";

function Owners(){
  const [showForm, setShowForm] = useState(false)
  const [showNote, setShowNote] = useState(false)
  const [allOwners, setAllOwners] = useState(null)
  const [reload, setReload] = useState(null)

  useEffect(() => {
    fetch("http://localhost:9292/owners")
    .then(r => r.json())
    .then(d => setAllOwners(d))
  },[reload])

  function handleNewOwner(newOwner){
    const ownerSubmission = {
      "first_name": newOwner.firstName,
      "last_name": newOwner.lastName
    }
    fetch("http://localhost:9292/owners",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(ownerSubmission)
    })
    .then(r => r.json())
    .then(d => setAllOwners([...allOwners, d].sort((a, b) => a.name > b.name ? -1 : 1)))
  }

  console.log(allOwners)

  function handleFormButtonClick(){
    setShowNote(false)
    setShowForm(s => !s)
  }

  function handleNoteButtonClick(){
    setShowForm(false)
    setShowNote(s => !s)
  }

  function handleAdd(info){
    setReload(info)
  }

  let ownersToDisplay
  let count = 0
  if (allOwners !== null) ownersToDisplay = allOwners.map(person => {
    count++
    return (
      <IndividualOwner
        key={person.first_name + count}
        first={person.first_name}
        last={person.last_name}
        sets={person.lego_sets}
        notes={person.notes}
      />
    )
  })

  return(
    <>
      <h1>All Owners</h1>
      <button onClick={handleFormButtonClick}>{showForm ? "Hide Form": "Add Owner"}</button>
      <button onClick={handleNoteButtonClick}>{showNote ? "Hide Assign" : "Assign Set"}</button>
      {showForm ? <OwnerForm onNewOwner={handleNewOwner}/> : null}
      {showNote ? <OwnerNoteForm owners={allOwners} onAddedNote={handleAdd}/> : null}
      {ownersToDisplay}
    </>
  )
}

export default Owners