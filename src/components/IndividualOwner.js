import React from "react";

function IndividualOwner({ first, last, sets, notes }){

	let count = 0
	const displaySets = sets.map(set =>{
		const noteDisplay = notes.map(note =>{
			if (set.id === note.lego_set_id && note.body !== null){
				count++
				return(
					<p key={count + first}>Note: {note.body}</p>
				)
			} else {
				return null
			}
		})
		if(set !== null){
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