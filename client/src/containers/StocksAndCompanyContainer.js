import React, {useContext} from 'react'
import { UserContext } from '../context/user'
import StocksAndCompaniesList from '../components/StocksAndCompaniesList'
import StockForm from '../components/StockForm'

const StocksAndCompaniesContainer = () => {
    
  const {mycompanies} = useContext(UserContext)


  return (
    <div>
      <h2>My Companies and Stocks Listed: </h2>
      <StockForm/>
      <br/>
      <br/>
      <StocksAndCompaniesList mycompanies={mycompanies}/>
    </div>
  )

}

export default StocksAndCompaniesContainer
