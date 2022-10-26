import React, {useState, useContext} from 'react'
import ReactCardFlip from 'react-card-flip';
import EditStock from './EditStock';
import { UserContext } from '../context/user'



const StockCard = ({stock}) => {

  const {deleteStock} = useContext(UserContext)

  const {id} = stock.id

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

 const  handleDeleteClick = () => {
  deleteStock(id)
 }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
    <button onClick={handleDeleteClick}>Delete</button>
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
