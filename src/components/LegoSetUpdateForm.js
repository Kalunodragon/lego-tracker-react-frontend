import React, { useEffect, useState } from "react";

function LegoSetUpdateForm({ onUpdate, setId, name, setNumber, pieces, theme, age }){
  const [themes, setThemes] = useState(null)
  const [formData, setFormData] = useState({
    "name": name,
    "setNumber": setNumber,
    "pieces": pieces,
    "theme": theme,
    "age": age,
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

  function handleUpdateSubmit(e){
    e.preventDefault()

    let themeData = ""
    if (formData.theme === "create"){
      themeData = formData.addTheme
    } else {
      themeData = formData.theme
    }

    const updateObject = {
      "name": formData.name,
      "setNumber": parseInt(formData.setNumber),
      "pieces": parseInt(formData.pieces),
      "theme": themeData,
      "age": parseInt(formData.age)
    }

    console.log(setId, updateObject)
  }

  const addThemeInput = formData.theme === "create" ? 
    <label>New Theme:
      <input
        className="form-input"
        type="text"
        placeholder="Add new theme"
        name="addTheme"
        onChange={handleChange}>
      </input> 
    </label> : null

  return(
    <>
      <form onSubmit={handleUpdateSubmit}>
        <label>Set Name:</label>
      <input
        className="form-input"
        type="text"
        placeholder="Edit Name Set"
        value={formData.name}
        name="name"
        onChange={handleChange}>
      </input>
        <label>Set Number:</label>
      <input
        className="form-input"
        type="text"
        placeholder="Edit Set Number"
        value={formData.setNumber}
        name="setNumber"
        onChange={handleChange}>
      </input>
        <label>Pieces:</label>
      <input
        className="form-input"
        type="text"
        placeholder="Edit Number Pieces"
        value={formData.pieces}
        name="pieces"
        onChange={handleChange}>
      </input>
        <label>Theme:</label>
      <select name="theme" onChange={handleChange} className="form-select">
        <option defaultValue="current">{theme}</option>
        {themes}
        <option value="create">Create New Theme</option>
      </select>
      {addThemeInput}
        <label>Age:</label>
      <input
        className="form-input"
        type="text"
        placeholder="Edit age"
        value={formData.age}
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