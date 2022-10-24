import React,{ useState, useContext } from "react";
import {UserContext} from "../context/user";
import {useNavigate} from "react-router-dom"

const CompaniesForm = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [addCompany] = useContext(UserContext)


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
      <form onSubmit={handleSubmit} style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 300, width: 400, color: "gold"}}>
          <label>Name: </label>
          <input type="text" id="name" value={username} onChange={(e) => setName(e.target.value)} required/>
            <br/>
            <br/>
          <label>Description: </label>
          <input type="text" id="description" value={email} onChange={(e) => setDescription(e.target.value)} required/>
            <br/>
            <br/>
          <input type="submit" value="Add Company!" />
      </form>
    </div>
  )
}

export default CompaniesForm
