import React, {useContext} from 'react'
import { UserContext } from '../context/user'
import StocksAndCompaniesList from '../components/StocksAndCompaniesList'

const StocksAndCompaniesContainer = () => {
    
  const {mycompanies} = useContext(UserContext)

  return (
    <div>
      <h2>My Companies and Stocks Listed: </h2>
      <StocksAndCompaniesList mycompanies={mycompanies}/>
    </div>
  )

}

export default StocksAndCompaniesContainer
