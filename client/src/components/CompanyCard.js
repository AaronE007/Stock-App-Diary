import React from 'react'
import StocksContainer from '../containers/StocksContainer'

const CompanyCard = ({company}) => {
  return (
 
  <div style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 600, width:600, color: "gold"}}>
    <h3>Name: {company.name}</h3>
    <br/>
    <h4>Description: {company.description}</h4>

    <StocksContainer/> 
  </div>

   
  )
}

export default CompanyCard
