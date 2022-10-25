import React from 'react'
import StocksList from '../components/StocksList'

const StocksContainer = ({stocks}) => {

  

  
return (
    <div>
      <h2>Stocks</h2>
      <StocksList stocks={stocks}/>
    </div>
  )
}

export default StocksContainer
