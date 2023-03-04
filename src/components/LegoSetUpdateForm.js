import React, { useState } from "react";

function LegoSetUpdateForm(){

  /*
    Working on getting this update form connected
    Have to set up
      route both sides
      conditional logic for what is updated
      fetch request and state update
  */

  function handleChange(){

  }

  return(
    <>
      <form>
      <input
        className="form-input"
        type="text"
        placeholder="Edit Name Set"
        name="name"
        onChange={handleChange}>
      </input>
      <input
        className="form-input"
        type="text"
        placeholder="Edit Set Number"
        name="setNumber"
        onChange={handleChange}>
      </input>
      <input
        className="form-input"
        type="text"
        placeholder="Edit Number Pieces"
        name="pieces"
        onChange={handleChange}>
      </input>
      <select name="theme" onChange={handleChange} className="form-select">
        <option defaultValue="Select">Select a theme</option>
        {/* {themes} */}
        <option value="create">Create New Theme </option>
      </select>
      {/* {addThemeInput} */}
      <input
        className="form-input"
        type="text"
        placeholder="Edit age"
        name="age"
        onChange={handleChange}>
      </input>
      <button className="form-submit">Submit</button>
      </form>
    </>
  )
}

// Use this form to update LEGO sets. This form should appear under
// the specific set that the update was clicked on.

// When this form is submitted it updates the API with the new information
// If a form item is left blank it is updated with the previous information
// being the information changed

export default LegoSetUpdateForm