import React from 'react'
import StockCard from './StockCard'

const StocksList = ({stocks}) => {

  const renderStocks = stocks.map(stock => <StockCard key={stock.id} stock={stock}/>)

  return (
    <div>
      {renderStocks}
    </div>
  )
}

export default StocksList
