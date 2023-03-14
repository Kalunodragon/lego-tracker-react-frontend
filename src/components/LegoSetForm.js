import React, { useEffect, useState } from "react";

function LegoSetForm({ onHandleSubmit }){
  const [themes, setThemes] = useState(null)
  const [formData, setFormData] = useState({
    "name": "",
    "setNumber": "",
    "pieces": "",
    "theme": "select",
    "age": "",
    "addTheme": ""
  })

  // UseEffect used for fetching all the themes from the API
  // For every theme an option tag is created for the form Dropdown
  useEffect(() => {
    fetch("http://localhost:9292/themes")
    .then(r => r.json())
    .then(d => setThemes(d.map(t => <option value={t.theme} key={t.theme}>{t.theme}</option>)))
  },[])

  // Handles all form changes
  function handleChange(e){
    const keyName = (e.target.name)
    const value = (e.target.value)
    setFormData({
      ...formData,
      [keyName]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    let themeData = ""
    if (formData.theme === "create"){
      themeData = formData.addTheme
    } else {
      themeData = formData.theme
    }

    if(
      formData.name === "" ||
      formData.setNumber === "" ||
      formData.pieces === "" ||
      formData.age === "" ||
      themeData === "" ||
      themeData === "Select a theme"
    ){
      return window.alert("Please fill out all of the form fields when adding a new LEGO set! Thank You!")
    } else {
      const submissionObject = {
        "name": formData.name,
        "set_number": parseInt(formData.setNumber),
        "peices": parseInt(formData.pieces),
        "theme": themeData,
        "age": parseInt(formData.age)
      }
      onHandleSubmit(submissionObject)
      window.alert(`${formData.name}: Has been added to the list`)
      e.target.reset()
    }
  }

  const addThemeInput = formData.theme === "create" ? 
    <input
      className="form-input"
      type="text"
      placeholder="Theme to add"
      name="addTheme"
      onChange={handleChange}>
    </input> : null

  if(!themes) return <h1>LOADING...</h1>

  return(
    <>
      <h1>Add A New Lego Set</h1>
      <p>For adding a new LEGO set please make sure to fill out all form elements before submitting!</p>
      <form onSubmit={handleSubmit} className="form-main">
        <input
          className="form-input"
          type="text"
          placeholder="Name of LEGO set"
          name="name"
          onChange={handleChange}>
        </input>
        <input
          className="form-input"
          type="text"
          placeholder="LEGO set number"
          name="setNumber"
          onChange={handleChange}>
        </input>
        <input
          className="form-input"
          type="text"
          placeholder="Number of LEGO pieces"
          name="pieces"
          onChange={handleChange}>
        </input>
        <select name="theme" onChange={handleChange} className="form-select">
          <option defaultValue="Select">Select a theme</option>
          {themes}
          <option value="create">Create New Theme </option>
        </select>
        {addThemeInput}
        <input
          className="form-input"
          type="text"
          placeholder="Recommended age"
          name="age"
          onChange={handleChange}>
        </input>
        <button className="form-submit">Submit</button>
      </form>
    </>
  )
}

export default LegoSetForm