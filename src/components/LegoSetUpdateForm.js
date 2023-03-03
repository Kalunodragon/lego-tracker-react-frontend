import React, { useState } from "react";

function LegoSetUpdateForm(){
  const [checked, setChecked] = useState(false)

  return(
    <>
      <h1>Update form testing</h1>
      {/* <form>
        <input
          type="checkbox"
          checked={checked}
        ></input>
      </form> */}
    </>
  )
}

// Use this form to update LEGO sets. This form should appear under
// the specific set that the update was clicked on.
// This update uses checkboxes to select the information
// that is being updated. It also has text and dropdowns that will appear
// when a checkbox is selected for that specific field.

// When this form is submitted it updates the API with the new information
// If a form item is left blank it is updated with the previous information
// being the information changed

export default LegoSetUpdateForm