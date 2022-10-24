import React,{ useState, useContext } from "react";
import {UserContext} from "../context/user";
import {useNavigate} from "react-router-dom"

const CompaniesForm = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")



  return (
    <div>
    <h2>Add Company</h2>
      <form onSubmit={handleSubmit} style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 300, width: 400, color: "gold"}}>
          <label>Name: </label>
          <input onChange={handleChange} type="text" name="name" value={company.name} required/>
          <br/>
          <br/>
          <label>Description: </label>
          <input onChange={handleChange} type="text" name="description" value={company.description} required/>
          <br/>
          <br/>
          <input type="submit" value="Add Restaurant!" />
      </form>
    </div>
  )
}

export default CompaniesForm
