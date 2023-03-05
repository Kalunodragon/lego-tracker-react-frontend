import React from "react";

function IndividualOwner({ first, last, sets, notes }){

	function handleButtonClick(e){
		const type = e.target.name
		const info = e.target.value
		if(type === "note"){
			removeNote(info)
		}
		if(type === "set"){
			removeNote(info)
			removeSet(info)
		}
	}

	function removeSet(set){
		// deletes the whole note insance by note id
		console.log(set)
	}

	function removeNote(note){
		// Removes the body portion of the note
		// AKA patch the body to null/nil
		console.log("note-id: ", note[0])
		console.log("note-set-id: ", note[1])
	}

	let count = 0
	const displaySets = sets.map(set =>{
		const noteDisplay = notes.map(note =>{
			if (set.id === note.lego_set_id && note.body !== null){
				count++
				return(
					<div>
						<p key={count + first}>Note: {note.body}</p>
						<button
							className="form-submit"
							name="note"
							onClick={handleButtonClick}	
							value={[note.id, note.lego_set_id]}
						>Delete Note</button>
					</div>
				)
			} else {
				return null
			}
		})
		if(set !== null){
			console.log(set)
			count ++
			return(
				<div key={first + count} className="owner-sets">
					<p>Set Name: {set.name}</p>
					{noteDisplay}
					<button
						className="form-submit"
						name="set"
						onClick={handleButtonClick}
						value={set}
					>Remove Set</button>
				</div>
			)
		} else {
			return null
		}
	})

	/*
		Notes ? Add to individual owners?
		Or
		Add them to their own page?

		Work on this after owners!!!
	*/

	return (
		<div className="people">
			<h1>{first} {last}</h1>
			{displaySets}
		</div>
	)
}

export default IndividualOwner