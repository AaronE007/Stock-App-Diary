import React from 'react'

const StockCard = ({stock}) => {
  return (
    <div style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 300, width:400, color: "gold"}}>
    <h3>Name: {stock.name}</h3>
    <br/>
    <h4>Price purchased at: {stock.price_purchased_at}</h4>
    <br/>
    <h4>Number of Stock Bought: {stock.number}</h4>
    <br/>
    <h4>Info: {stock.info}</h4>
  </div>

  )
}

export default StockCard