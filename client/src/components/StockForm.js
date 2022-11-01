import { useState, useContext } from "react"
import React  from 'react'
import { UserContext } from "../context/user"

const StockForm = ({mycompanies}) => {
  const {addStock} = useContext(UserContext)
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

  const newStock = {
    name: stock.name,
    price_purchased_at: stock.pricePurchasedAt,
    number: stock.number,
    info: stock.info,
    company: stock.company
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/stocks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStock),
   })
    .then(res => res.json())
    .then(stock => {
          addStock(stock)
     })
  }


  const renderMyCompanies = mycompanies.map(c => <li key={c.id}>{c.name}</li>)
 

  return (
  <div>
    <form onSubmit={handleSubmit} style={{margin: "auto", border: "solid", backgroundColor: "#8ec3eb" , height: 400, width: 400, color: "#2a6592"}}>
      <div>
        <h5>Add a new stock here. If the company you want to add does not exist in the community database, it will be added it to the database.</h5>
      </div>
      <label>Name: </label>
      <input onChange={handleChange} type="text" name="name" value={stock.name} required/>
        <br/>
      <label>Price purcahased at: </label>
      <input onChange={handleChange} type="number" name="pricePurchasedAt" value={stock.pricePurchasedAt} required/>
        <br/>
      <label>Number of stock bought: </label>
      <input onChange={handleChange} type="number" name="number" value={stock.number} required/>
        <br/>
      <label>Info: </label>
      <input onChange={handleChange} type="text" name="info" value={stock.info} required/>
        <br/>
      <label>Company: </label>
      <input onChange={handleChange} type="text" name="company" value={stock.company} required/>
        <br/>
      <input type="submit" value="Add Stock" />
        <div>
          {renderMyCompanies}
        </div>
    </form>
  </div>
  )
}

export default StockForm