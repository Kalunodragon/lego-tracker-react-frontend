import React, { useState } from "react";
import LegoSetUpdateForm from "./LegoSetUpdateForm";

function OneLegoSet({ name, setNumber, pieces, theme, notes, onUpdate, age, setId, onDelete }){
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  let noteCount = 0
  const displayNotes = notes.map(note => {
    if (note.body !== null){
      noteCount++
      return(
        <p key={name + noteCount}>Note {noteCount}: {note.body}</p>
      )
    } else {
      return null
    }
  })

  function handleButtonClick(){
    setShowUpdateForm(v => !v)
  }

  function deleteLegoSet(){
    const result = window.confirm("Is it OK to permanently delete: " + name + " , from the list?")
    if(result){
      onDelete(setId, name)
    } else {
      window.alert("Be careful with that button! It could destroy us all!")
    }
  }

  return(
    <div className="div-sets">
      <h1 className="set-name">{name}</h1>
      <h2>Set Number: {setNumber}</h2>
      <p>Pieces: {pieces}</p>
      <p>Theme: {theme}</p>
      <p>Recommended age: {age}+</p>
      {displayNotes}
      <button className="form-submit" onClick={handleButtonClick}>
        {showUpdateForm === true ? "Hide Form" : "Update"}
      </button>
        {showUpdateForm === true ? 
          <LegoSetUpdateForm
            setId={setId}
            name={name}
            setNumber={setNumber}
            pieces={pieces}
            theme={theme}
            age={age}
            onUpdate={onUpdate}/> : null}
      {showUpdateForm === true ?
        <button
          className="delete"
          onClick={deleteLegoSet}
        >DELETE</button> : null}
    </div>
  )
}

export default OneLegoSet