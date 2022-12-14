import { useState, useContext } from "react"
import React  from 'react'
import { UserContext } from "../context/user"

const EditStock = ({id}) => {
  const [errors, setErrors] = useState([])
  const {onUpdateStock} = useContext(UserContext)
  const [stock, setStock] = useState({
    name: "", 
    pricePurchasedAt: "",
    number: "",
    info: ""
  })
 
  const handleChange = (e) => {
    setStock({
      ...stock,
      [e.target.name]: e.target.value
    })
  }

  const newStock = {
    name: stock.name,
    price_purchased_at: stock.pricePurchasedAt,
    number: stock.number,
    info: stock.info
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/stocks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStock),
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
        <input onChange={handleChange} type="text" name="name" value={stock.name} required/>
          <br/>
          <br/>
        <label>Price purcahased at: </label>
        <input onChange={handleChange} type="number" name="pricePurchasedAt" value={stock.pricePurchasedAt} required/>
          <br/>
          <br/>
        <label>Number of stock bought: </label>
        <input onChange={handleChange} type="number" name="number" value={stock.number} required/>
          <br/>
          <br/>
        <label>Info: </label>
        <input onChange={handleChange} type="text" name="info" value={stock.info} required/>
          <br/>
        <input type="submit" value="Change Stock Buy Data" />
      </form>
      <ul>
        {errors}
      </ul>
    </div>
  )
}

export default EditStock
