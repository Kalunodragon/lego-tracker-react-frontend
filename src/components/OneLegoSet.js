import React from "react";

function OneLegoSet({ name, setNumber, pieces, theme, notes }){

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

  return(
    <div>
      <h1>{name}</h1>
      <p>Set Number: {setNumber}</p>
      <p>Pieces: {pieces}</p>
      <p>Theme: {theme}</p>
      {displayNotes}
    </div>
  )
}

export default OneLegoSet