import React, { useEffect, useState } from "react";
import IndividualOwner from "./IndividualOwner";
import OwnerForm from "./OwnerForm"

function Owners(){
  const [showForm, setShowForm] = useState(false)
  const [allOwners, setAllOwners] = useState(null)

  useEffect(() => {
    fetch("http://localhost:9292/owners")
    .then(r => r.json())
    .then(d => setAllOwners(d))
  },[])

  function handleNewOwner(newOwner){
    console.log(newOwner)
  }

  console.log(allOwners)

  function handleClick(){
    setShowForm(s => !s)
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
      <button onClick={handleClick}>{showForm ? "Hide Form": "Add Owner"}</button>
      {showForm ? <OwnerForm onNewOwner={handleNewOwner}/> : null}
      {ownersToDisplay}
    </>
  )
}

export default Owners