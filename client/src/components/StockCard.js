import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import EditStock from './EditStock';


const StockCard = ({stock}) => {

  const {id} = stock.id

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 300, width:300, color: "gold"}}>
        <h3>Name: {stock.name}</h3>
        <br/>
        <h4>Price purchased at: {stock.price_purchased_at}</h4>
        <h4>Number of Stock Bought: {stock.number}</h4>
        <h4>Info: {stock.info}</h4>
        <br/>
        <button onClick={handleClick}>Click to Update Meal</button>
      </div>
      <div style={{margin: "auto", border: "solid", backgroundColor: "gold", height: 300, width: 300, color: "blue"}}>
        <div>
          <EditStock id={id}  stock={stock} />
        </div>
        <br/>
          <button onClick={handleClick}>Click to Return to UpdatedStock</button>
      </div>
    </ReactCardFlip>

  )
}

export default StockCard
