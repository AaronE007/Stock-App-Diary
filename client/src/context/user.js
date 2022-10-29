import React, {useState, useEffect} from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [companies, setCompanies] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [stocks, setStocks] = useState([])


  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data) 
        if (data.error) {
        setLoggedIn(false)
        setStocks([])
        setCompanies([])
      }else {
        setLoggedIn(true)
        fetchStocks()
        fetchCompanies()
      }
    })
  }, [])


  const fetchCompanies = () =>{
    fetch('/companies')
    .then((r) => r.json())
    .then(data => setCompanies(data))
  }

  const fetchStocks = () =>{
    fetch('/stocks')
    .then((r) => r.json())
    .then(data => setStocks(data))
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
    console.log(stock)
    fetch('/stocks', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(stock)
    })
    .then(res => res.json())
    .then(data => {
      setStocks([...stocks, data])
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
    fetchCompanies()
    fetchStocks()
    setUser(user)
    setLoggedIn(true)
  }

  const logout = () => {
    setUser({})
    setLoggedIn(false)
  }

  const signup = (user) => {
    setUser(user)
    setLoggedIn(true)
   }



  return (
    <UserContext.Provider value={{user, companies, stocks, loggedIn, login, logout, signup, addCompany, addStock, onUpdateStock, deleteStock}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}