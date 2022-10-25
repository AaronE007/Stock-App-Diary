import React from 'react'
import StocksList from './StocksList'

const StocksAndCompaniesCard = ({company}) => {
  return (
 
  <div style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 900, width:500, color: "gold"}}>
    <h3>Name: {company.name}</h3>
    <br/>
    <h4>Description: {company.description}</h4>

    <StocksList stocks={company.stocks}/> 
  </div>

   
  )
}

export default StocksAndCompaniesCard
