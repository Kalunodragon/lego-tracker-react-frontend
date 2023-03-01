import React, { useEffect, useState } from "react";

function LegoSetUpdateForm({ onSetUpdate }){
  const [themes, setThemes] = useState(null)
  const [formData, setFormData] = useState({
    "name": "",
    "setNumber": "",
    "pieces": "",
    "theme": "select",
    "age": "",
    "addTheme": ""
  })

  useEffect(() => {
    fetch("http://localhost:9292/themes")
    .then(r => r.json())
    .then(d => setThemes(d.map(t => <option value={t.theme} key={t.theme}>{t.theme}</option>)))
  },[])

  function handleChange(e){
    const keyName = (e.target.name)
    const value = (e.target.value)
    setFormData({
      ...formData,
      [keyName]: value
    })
  }

  const addThemeInput = formData.theme === "create" ? 
  <input
    className="form-input"
    type="text"
    placeholder="Theme to add"
    name="addTheme"
    onChange={handleChange}>
  </input> : null

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
        <option defaultValue="Select">Edit theme</option>
        {themes}
        <option value="create">Create New Theme</option>
      </select>
      {addThemeInput}
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