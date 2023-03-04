import React, { useState } from "react";
import LegoSetUpdateForm from "./LegoSetUpdateForm";

function OneLegoSet({ name, setNumber, pieces, theme, notes, onUpdate, age, setId }){
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

  function handleButtonClick(){
    setShowUpdateForm(v => !v)
  }

  return(
    <div>
      <h1>{name}</h1>
      <p>Set Number: {setNumber}</p>
      <p>Pieces: {pieces}</p>
      <p>Theme: {theme}</p>
      {displayNotes}
      <button className="form-submit" onClick={handleButtonClick}>Update</button>
        {showUpdateForm === true ? 
          <LegoSetUpdateForm
            setId={setId}
            name={name}
            setNumber={setNumber}
            pieces={pieces}
            theme={theme}
            age={age}
            onUpdate={onUpdate}/> : null}
      <button className="form-submit" onClick={handleButtonClick}>Add Note</button>
      <button className="form-submit" onClick={handleButtonClick}>Delete</button>
    </div>
  )
}

export default OneLegoSet