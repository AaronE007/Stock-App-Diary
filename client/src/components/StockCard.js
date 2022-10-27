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
      <div style={{margin: "auto", border: "solid", backgroundColor: "#2a6592", height: 400, width:300, color: "peachpuff"}}>
      <button onClick={handleDeleteClick}>Delete</button>
        <h3>Name: {stock.name}</h3>
        <br/>
        <h4>Price purchased at: {stock.price_purchased_at}</h4>
        <h4>Number of Stock Bought: {stock.number}</h4>
        <h4>Info: {stock.info}</h4>
        <h4>Company: {stock.company.name}</h4>
        <br/>
        <button onClick={handleClick}>Click to Update Meal</button>
      </div>
      <div style={{margin: "auto", border: "solid", backgroundColor: "peachpuff", height: 300, width: 300, color: "#2a6592"}}>
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
