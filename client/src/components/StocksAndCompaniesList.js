import React from 'react'
import StocksAndCompaniesCard from './StocksAndCompaniesCard'
const StockandCompaniesList = ({mycompanies}) => {
  
  const renderStocksCompanies = mycompanies.map(company => <StocksAndCompaniesCard key={company.id} company={company}/>)

  return (
    <div>
    {renderStocksCompanies}  
    </div>

  )
}

export default StockandCompaniesList
