import React, { useEffect, useState } from "react";

function LegoSetForm(){
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

  function handleSubmit(e){
    e.preventDefault()
    
    let themeData = ""
    if (formData.theme === "create"){
      themeData = formData.addTheme
    } else {
      themeData = formData.theme
    }

    console.log({
      "name": formData.name,
      "setNumber": parseInt(formData.setNumber),
      "pieces": parseInt(formData.pieces),
      "theme": themeData,
      "age": parseInt(formData.age)
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

  if(!themes) return <h1>LOADING...</h1>

  return(
    <>
      <h1>Add A New Lego Set</h1>
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
          placeholder="Number of LEGO pieces in set"
          name="pieces"
          onChange={handleChange}>
        </input>
        <select name="theme" onChange={handleChange} className="form-select">
          <option defaultValue="Select">Select an option</option>
          <option value="create">Create New Theme </option>
          {themes}
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