import React, {useContext} from 'react'
import { UserContext } from '../context/user'
import StocksList from '../components/StocksList'
import StockForm from '../components/StockForm'

const StocksContainer = () => {
    
  const {stocks} = useContext(UserContext)

  const {mycompanies} = useContext(UserContext)

  return (
    <div>
      <h2>My Stock Buys Diary: </h2>
      <StockForm mycompanies={mycompanies}/>
      <br/>
      <br/>
      <StocksList stocks={stocks}/>
    </div>
  )

}

export default StocksContainer
