import React, {useContext} from 'react'
import { UserContext } from '../context/user'
import StocksList from '../components/StocksList'

const StocksContainer = () => {

  const {stocks} = useContext(UserContext)
  


  return (
    <div>
      <h2>Stocks</h2>
      <StocksList stocks={stocks}/>
    </div>
  )
}

export default StocksContainer
