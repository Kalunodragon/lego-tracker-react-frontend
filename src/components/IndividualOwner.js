import React from "react";

function IndividualOwner({ first, last, sets, notes, update }){

	function handleButtonClick(e){
		const type = e.target.name
		const info = e.target.value

		if(type === "note"){
			console.log(info)
			patchNote({"note_id": info})
		}
		if(type === "set"){
			deleteNote(info)
		}
	}

	function patchNote(noteId){
		fetch("http://localhost:9292/note/patch",{
			method: "PATCH",
			headers: {"Content-Type":"application/json"},
			body: JSON.stringify(noteId)
		})
		.then(r => r.json())
		.then(d => update(d))
	}

	function deleteNote(noteId){
		fetch(`http://localhost:9292/note/delete/${noteId}`,{
			method: "DELETE"
		})
		.then(r => r.json())
		.then(d => update(d))
	}

	let count = 0
	const displaySets = sets.map(set =>{
		if(set !== null){
		const noteDisplay = notes.map(note =>{
			if (set.id === note.lego_set_id && note.body !== null){
				count++
				return(
					<div key={count + first}>
						<p>Note: {note.body}</p>
						<button
							className="form-submit"
							name="note"
							onClick={handleButtonClick}
							value={note.id}
						>Delete Note</button>
						<button
							className="form-submit"
							name="set"
							onClick={handleButtonClick}
							value={note.id}
						>Remove Set</button>
					</div>
				)
			} else if(set.id === note.lego_set_id && note.body === null){
				return(
					<button
					key={count + first + last}
					className="form-submit"
					name="set"
					onClick={handleButtonClick}
					value={note.id}
				>Remove Set</button>
				)	
			} else {
				return null
			}
		})

			count ++
			return(
				<div key={first + count} className="owner-sets">
					<p>Set Name: {set.name}</p>
					{noteDisplay}
				</div>
			)
		} else {
			return null
		}
	})

	return (
		<div className="people">
			<h1>{first} {last}</h1>
			{displaySets}
		</div>
	)
}

export default IndividualOwner