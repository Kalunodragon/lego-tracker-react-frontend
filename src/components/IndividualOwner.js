import React from "react";

function IndividualOwner({ first, last, sets, notes, update }){

	function handleButtonClick(e){
		const type = e.target.name
		const info = e.target.value

		if(type === "note"){
			console.log(info)
			const updateObject = {
				"note_id": info[0],
				"lego_set_id": info[1]
			}
			fetch("http://localhost:9292/note/patch",{
				method: "PATCH",
				headers: {"Content-Type":"application/json"},
				body: JSON.stringify(updateObject)
			})
			.then(r => r.json())
			.then(d => update(d))
		}
		if(type === "set"){

		}

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
							value={[note.id, note.lego_set_id]}
						>Delete Note</button>
					</div>
				)
			} else {
				return null
			}
		})
		// if(set !== null){
			count ++
			const setAndName = [set.id, first]
			return(
				<div key={first + count} className="owner-sets">
					<p>Set Name: {set.name}</p>
					{noteDisplay}
					<button
						className="form-submit"
						name="set"
						onClick={handleButtonClick}
						value={setAndName}
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