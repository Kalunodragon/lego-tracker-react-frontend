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

	return (
		<div className="people">
			<h1>{first} {last}</h1>
			{displaySets}
		</div>
	)
}

export default IndividualOwner