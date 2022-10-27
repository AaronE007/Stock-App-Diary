import React from 'react'

const CompanyCard = ({company}) => {
  return (


    <div style={{margin: "auto", border: "solid", backgroundColor: "#2a6592", height: 200, width:400, color: "#db9833"}}>
    <h3>Name: {company.name}</h3>
    <br/>
    <h4>Description: {company.description}</h4>
    </div>
  )
}

export default CompanyCard
