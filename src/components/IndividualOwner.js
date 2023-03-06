import React from "react";

function IndividualOwner({ first, last, sets }){

	let count = 0
	const displaySets = sets.map(set =>{
		if(set !== null){
			count ++
			return(
				<p key={first + count}>{set.name}</p>
			)
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