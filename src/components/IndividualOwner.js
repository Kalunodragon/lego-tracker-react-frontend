import React from "react";

function IndividualOwner({ first, last, sets, notes }){

	function handleButtonClick(e){
		console.log(e.target.value)
	}

	let count = 0
	const displaySets = sets.map(set =>{
		// if(set !== null){

		const noteDisplay = notes.map(note =>{
			if (set.id === note.lego_set_id && note.body !== null){
				count++
				const values = [note.id, note.lego_set_id]
				return(
					<div key={count + first}>
						<p>Note: {note.body}</p>
						<button
							className="form-submit"
							name="note"
							onClick={handleButtonClick}	
							value={values}
						>Delete Note</button>
					</div>
				)
			} else {
				return null
			}
		})
		if(set !== null){
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