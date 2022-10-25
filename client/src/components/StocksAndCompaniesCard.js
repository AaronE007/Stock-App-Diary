import React from 'react'
import StocksList from './StocksList'

const StocksAndCompaniesCard = ({company}) => {
  return (
 
  <div style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 600, width:600, color: "gold"}}>
    <h3>Name: {company.name}</h3>
    <br/>
    <h4>Description: {company.description}</h4>

    <StocksList stocks={company.stocks}/> 
  </div>

   
  )
}

export default StocksAndCompaniesCard
