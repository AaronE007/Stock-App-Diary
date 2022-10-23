import React from 'react'
import CompanyCard from './components/CompanyCard'

const CompaniesList = ({companies}) => {
  
  const renderCompanies = companies.map(company => <CompanyCard key={company.id} company={company}/>)

  return (
    <div>
    {renderCompanies}  
    </div>

  )
}

export default CompaniesList
