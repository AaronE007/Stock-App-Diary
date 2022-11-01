import React, {useState, useEffect} from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [companies, setCompanies] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [stocks, setStocks] = useState([])
  const [mycompanies, setMyComapanies] = useState([])

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data) 
        if (data.error) {
        setLoggedIn(false)
        setStocks([])
        setCompanies([])
        setMyComapanies([])
      }else {
        setLoggedIn(true)
        setMyComapanies(data.unique_companies)
        setStocks(data.stocks)
        fetchCompanies()
      }
    })
  }, [])


  const fetchCompanies = () =>{
    fetch('/companies')
    .then((r) => r.json())
    .then(data => setCompanies(data))
  }


  
  const addCompany = (company) => {
    fetch('/companies', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(company)
    })
    .then(res => res.json())
    .then(data => {
      setCompanies([...companies, data])
    })
  }

  const addStock = (stock) => {
    setStocks([...stocks, stock])
    if (!checkCompanyExists(stock)) {
      setCompanies([...companies, stock.company])
    }
  }


  const checkCompanyExists = (stock) => {
    return companies.some((company) => { 
     return company.name === stock.company.name
    })
    
  }

  function onUpdateStock(updatedStock) {
    const stocksUpdated = stocks.map((stock) => {
      if (stock.id === updatedStock.id) {
        return updatedStock;
      } else {
        return stock;
      }
    });
    setStocks(stocksUpdated);
  }


  function onDeleteStock(id) {
    const updatedStocks= stocks.filter((stock) => stock.id !== id);
    setStocks(updatedStocks);
  }

  const deleteStock = (id) => {
    fetch(`stocks/${id}`, {
      method: "DELETE",
    });
  onDeleteStock(id)
}

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
    fetchCompanies()
    setStocks(user.stocks)
  }

  const logout = () => {
    setUser({})
    setLoggedIn(false)
  }

  const signup = (user) => {
    setUser(user)
    setLoggedIn(true)
    fetchCompanies()
    setStocks([{
      "id": 1,
      "name": "Sample Stock",
      "price_purchased_at": 100,
      "info": "Cool option",
      "number": 100,
      "company": {
      "id": 1,
      "name": "Sample Company",
      "description": "Just a computer company."
      }
    }])
  }



  return (
    <UserContext.Provider value={{user, companies, stocks, loggedIn, mycompanies, login, logout, signup, addCompany, addStock, onUpdateStock, deleteStock}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}