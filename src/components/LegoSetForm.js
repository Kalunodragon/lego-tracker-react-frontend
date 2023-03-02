import React, { useEffect, useState } from "react";

function LegoSetForm({ themeOptions }){
  const [mappedOptions, setMappedOptions] = useState(themeOptions)
  const [formData, setFormData] = useState({
    "name": "",
    "setNumber": "",
    "pieces": "",
    "theme": "",
    "age": ""
  })

  useEffect(() => {
    setMappedOptions([...new Set(mappedOptions)].map(opt => {
      return <option value={opt}>{opt}</option>
    }))
  },[])

  console.log("from Form: ", themeOptions)

  function handleChange(e){
    const keyName = (e.target.name)
    const value = (e.target.value)
    setFormData({
      ...formData,
      [keyName]: value
    })
  }

  return(
    <>
      <h1>Add A New Lego Set</h1>
      <form>
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
        <select>
          {mappedOptions}
        </select>
        <input
          type="text"
          placeholder="Recommended age"
          name="age"
          onChange={handleChange}>
        </input>
      </form>
    </>
  )
}

export default LegoSetForm