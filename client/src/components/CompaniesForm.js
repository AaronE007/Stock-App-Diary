import React,{ useState, useContext } from "react";
import {UserContext} from "../context/user";

const CompaniesForm = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const {addCompany} = useContext(UserContext)


  const handleSubmit = (e) => {
    e.preventDefault()
    addCompany({
      name: name,
      description: description
    })
  }

  return (
    <div>
    <h2>Add Company</h2>
      <form onSubmit={handleSubmit} style={{margin: "auto", border: "solid", backgroundColor: "#8ec3eb" , height: 300, width: 400, color: "#2a6592"}}>
          <label>Name: </label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
            <br/>
            <br/>
          <label>Description: </label>
          <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
            <br/>
            <br/>
          <input type="submit" value="Add Company!" />
      </form>
    </div>
  )
}

export default CompaniesForm
