import React, { useState } from "react";

function OwnerForm({ onNewOwner }){
  const [formData, setFormData] = useState({
    "firstName": "",
    "lastName": ""
  })

  function handleChange(e){
    const formName = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [formName]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    if(
      formData.firstName === "" ||
      formData.lastName === ""
    ){
      window.alert("Please fill in entire name, Thank You!")
    } else {
      onNewOwner(formData)
      setFormData({
        "firstName": "",
        "lastName": ""
      })
    }
  }

  return(
    <>
      <h1>Add a new Owner here to help track their LEGO</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          className="form-input"
          value={formData.firstName}
          placeholder="First Name"
          onChange={handleChange}>  
        </input>
        <input
          type="text"
          name="lastName"
          className="form-input"
          value={formData.lastName}
          placeholder="Last Name"
          onChange={handleChange}>  
        </input>
        <button className="form-submit">Submit</button>
      </form>
    </>
  )
}

export default OwnerForm