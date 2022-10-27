import React, {useContext} from 'react'
import { UserContext } from '../context/user'
import StocksList from '../components/StocksList'
import StockForm from '../components/StockForm'

const StocksAndCompaniesContainer = () => {
    
  const {stocks} = useContext(UserContext)


  return (
    <div>
      <h2>My Companies and Stocks Listed: </h2>
      <StockForm/>
      <br/>
      <br/>
      <StocksList stocks={stocks}/>
    </div>
  )

}

export default StocksAndCompaniesContainer
