import { useState, useContext } from "react"
import React  from 'react'
import { UserContext } from "../context/user"

const StockForm = () => {
  const [name, setName] = useState("")
  const [pricepurchasedat, setPricepurchasedat] = useState("")
  const [number, setNumber] = useState("")
  const [info, setInfo] = useState("")
  const [company, setCompany] = useState("")
  const {addStock} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addStock({
      name: name,
      price_purchased_at: pricepurchasedat,
      number: number,
      info: info,
      company: company
    })
  }

  return (
    <form onSubmit={handleSubmit} style={{margin: "auto", border: "solid", backgroundColor: "#8ec3eb" , height: 300, width: 400, color: "#2a6592"}}>
      <label>Name: </label>
      <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} required/>
        <br/>
        <br/>
      <label>Price purcahased at: </label>
      <input onChange={(e) => setPricepurchasedat(e.target.value)} type="number" name="price_puchased_at" value={pricepurchasedat} required/>
        <br/>
        <br/>
      <label>Number of stock bought: </label>
      <input onChange={(e) => setNumber(e.target.value)} type="number" name="number" value={number} required/>
        <br/>
        <br/>
      <label>Info: </label>
      <input onChange={(e) => setInfo(e.target.value)} type="text" name="info" value={info} required/>
        <br/>
        <br/>
      <label>Company: </label>
      <input onChange={(e) => setCompany(e.target.value)} type="text" name="company" value={company} required/>
        <br/>
      <input type="submit" value="Change Stock Buy Data" />
    </form>
  )
}

export default StockForm