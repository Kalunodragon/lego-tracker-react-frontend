import React, { useEffect, useState } from "react";

function LegoSetForm(){
  const [themes, setThemes] = useState(null)
  const [formData, setFormData] = useState({
    "name": "",
    "setNumber": "",
    "pieces": "",
    "theme": "select",
    "age": ""
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
    console.log(formData)
  }

  if(!themes) return <h1>LOADING...</h1>

  return(
    <>
      <h1>Add A New Lego Set</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name of LEGO set"
          name="name"
          onChange={handleChange}>
        </input>
        <input
          type="text"
          placeholder="LEGO set number"
          name="setNumber"
          onChange={handleChange}>
        </input>
        <input
          type="text"
          placeholder="Number of LEGO pieces in set"
          name="pieces"
          onChange={handleChange}>
        </input>
        <select name="theme" onChange={handleChange}>
          <option defaultValue="Select">Select an option</option>
          <option value="create">Create New Theme </option>
          {themes}
        </select>
        <input
          type="text"
          placeholder="Recommended age"
          name="age"
          onChange={handleChange}>
        </input>
        <button>Submit</button>
      </form>
    </>
  )
}

export default LegoSetForm