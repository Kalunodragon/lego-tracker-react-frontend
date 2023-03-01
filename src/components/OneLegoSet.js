import React, { useState } from "react";
import LegoSetUpdateForm from "./LegoSetUpdateForm";

function OneLegoSet({ name, setNumber, pieces, theme, notes, onSetUpdate }){
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  let noteCount = 0
  const displayNotes = notes.map(note => {
    if (note.body !== null){
      noteCount++
      return(
        <p key={name + noteCount}>{note.body}</p>
      )
    } else {
      return null
    }
  })

  function handleButtonClick(e){
    const key = e.target.name
    const value = e.target.value
    setShowUpdateForm({...showUpdateForm, [key]: !value})
  }

  return(
    <div>
      <h1>{name}</h1>
      <p>Set Number: {setNumber}</p>
      <p>Pieces: {pieces}</p>
      <p>Theme: {theme}</p>
      {displayNotes}
      <button value={showUpdateForm.update} className="form-submit" name="update" onClick={handleButtonClick}>Update</button>
        {showUpdateForm.update === true ? <LegoSetUpdateForm onSetUpdate={onSetUpdate}/> : null}
      <button value={showUpdateForm.update} className="form-submit" name="note" onClick={handleButtonClick}>Add Note</button>
      <button value={showUpdateForm.update} className="form-submit" name="delete" onClick={handleButtonClick}>Delete</button>
    </div>
  )
}

export default OneLegoSet