import React, { useEffect, useState } from "react";

function OwnerNoteForm({ owners, onAddedNote }){
  const [sets, setSets] = useState(null)
  const [noteFormData, setNoteFormData] = useState({
    "owner": "",
    "legoSet": "",
    "text": ""
  })

  useEffect(() => {
    fetch("http://localhost:9292/lego_sets_names")
    .then(r => r.json())
    .then(d => setSets(d))
  },[])

  let ownerOptions
  if(owners !== null) ownerOptions = owners.map(person =>{
    const name = person.first_name + " " + person.last_name
    return(
      <option
        value={person.id}
        key={name}
      >{name}</option>
    )
  })

  let setsOptions
  if(sets !== null) setsOptions = sets.map(set =>{
    return(
      <option
        value={set.id}
        key={set.name}
      >{set.name}</option>
    )
  })

  function handleChange(e){
    const key = e.target.name
    const value = e.target.value
    setNoteFormData({
      ...noteFormData,
      [key]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    const noteSubmission = {
      "owner_id": noteFormData.owner,
      "lego_set_id": noteFormData.legoSet,
      "body": noteFormData.text
    }
    submitFetch(noteSubmission)
    e.target.reset()
  }

  function submitFetch(info){
    fetch("http://localhost:9292/notes",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(info)
    })
    .then(r => r.json())
    .then(d => onAddedNote(d))
  }

  if (!ownerOptions && !sets) return <h1>LOADING...</h1>

  return(
    <>
      <h1>Make sure to add an owner before assigning a set!</h1>
      <p>Select an Owner, then select a set, optinonal add a note about the set!</p>
      <form onSubmit={handleSubmit}>
        <select className="note" name="owner" onChange={handleChange}>
          <option defaultValue="select-owner">Select an Owner</option>
          {ownerOptions}
        </select>
        <select className="note" name="legoSet" onChange={handleChange}>
          <option defaultValue="select-set">Select a Set</option>
          {setsOptions}
        </select>
        <br></br>
        <input
          onChange={handleChange}
          type="text"
          name="text"
          className="note-block"
        >
        </input>
        <br></br>
        <button className="form-submit">Submit</button>
      </form>
    </>
  )
}

export default OwnerNoteForm