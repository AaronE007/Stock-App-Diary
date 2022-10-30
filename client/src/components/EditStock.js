import { useState, useContext } from "react"
import React  from 'react'
import { UserContext } from "../context/user"

const EditStock = ({id}) => {
  const [stock, setStock] = useState({
    name: "", 
    pricePurchasedAt: "",
    number: "",
    info: "",
    company: ""
  })
 
  const [errors, setErrors] = useState([])

  const {onUpdateStock} = useContext(UserContext)

  const 
  


  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/meals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        price_purchased_at: pricepurchasedat,
        number: number,
        info: info,
        company: stock.company
      })
   })
    .then(res => res.json())
    .then(updatedStock => {
        if (!updatedStock.errors) {
          onUpdateStock(updatedStock)
        } else {
          const errorsList = updatedStock.errors.map(e => <li>{e}</li>)
          setErrors(errorsList)
        }
     })
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input onChange={} type="text" name="name" value={stock.name} required/>
        <br/>
        <br/>
      <label>Price purcahased at: </label>
      <input onChange={(e) => setPricepurchasedat(e.target.value)} type="number" name="price_puchased_at" value={stock.} required/>
        <br/>
        <br/>
      <label>Number of stock bought: </label>
      <input onChange={(e) => setNumber(e.target.value)} type="number" name="number" value={number} required/>
        <br/>
        <br/>
      <label>Info: </label>
      <input onChange={(e) => setInfo(e.target.value)} type="text" name="info" value={info} required/>
      <br/>
      <label>Company: </label>
      <input onChange={(e) => setCompany(e.target.value)} type="text" name="company" value={company} required/>
       
      <input type="submit" value="Change Stock Buy Data" />
    </form>
      <ul>
        {errors}
      </ul>
    </div>
  )
}

export default EditStock
