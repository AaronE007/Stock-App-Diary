import { useState, useContext } from "react"
import React  from 'react'
import { UserContext } from "../context/user"

const StockForm = () => {

  const [stock, setStock] = useState({
    name: "", 
    pricePurchasedAt: "",
    number: "",
    info: "",
    company: ""
  })

  const handleChange = (e) => {
    setStock({
      ...stock,
      [e.target.name]: e.target.value
    })
  }


  const {addStock} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addStock({
      name: name,
      price_purchased_at: pricepurchasedat,
      number: number,
      info: info,
      company: stock.company
    })
  }

  const newStock = {
    name: stock.name,
    price_purchased_at: stock.pricePurchasedAt,
    number: stock.number,
    info: stock.info,
    company: stock.company
  }
  

  return (
    <form onSubmit={handleSubmit} style={{margin: "auto", border: "solid", backgroundColor: "#8ec3eb" , height: 300, width: 400, color: "#2a6592"}}>
      <label>Name: </label>
        <input onChange={handleChange} type="text" name="name" value={stock.name} required/>
          <br/>
          <br/>
        <label>Price purcahased at: </label>
        <input onChange={handleChange} type="number" name="price_puchased_at" value={stock.pricePurchasedAt} required/>
          <br/>
          <br/>
        <label>Number of stock bought: </label>
        <input onChange={handleChange} type="number" name="number" value={number.number} required/>
          <br/>
          <br/>
        <label>Info: </label>
        <input onChange={handleChange} type="text" name="info" value={stock.info} required/>
        <br/>
        <label>Company: </label>
        <input onChange={handleChange} type="text" name="company" value={stock.company} required/>
        <br/>
      <input type="submit" value="Add Stock" />
    </form>
  )
}

export default StockForm