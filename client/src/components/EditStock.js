import React from 'react'






const EditStock = ({id, updateStock}) => {


  const handleChange = () => {

  }


  return (
    <form onSubmit={handleFormSubmit}>
    <label>Name: </label>
    <input onChange={handleChange} type="text" name="name" value={stock.name} required/>
    <br/>
    <br/>

    <label>Price purcahased at: </label>
    <input onChange={handleChange} type="number" name="price_puchased_at" value={stock.price_purchases_at} required/>
    <br/>
    <br/>

    <label>Number of stock bought: </label>
    <input onChange={(handleChange)} type="number" name="number" value={stock.number} required/>
    <br/>
    <br/>

    <label>Info: </label>
    <input onChange={handleChange} type="text" name="info" value={stock.info} required/>
    <br/>
    <br/>

    <label>Company bought from: </label>
    <input onChange={handleChange} type="text" name="company" value={stock.company} required/>
    <br/>
    <input type="submit" value="Change Stock Buy Data" />
    </form>
  )
}

export default EditStock
