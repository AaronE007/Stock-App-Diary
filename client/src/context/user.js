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

  const updateStock = (stock, id) => {
    fetch(`stocks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stock),
    })
      .then((r) => r.json())
      .then(data =>{


      });
  }

  const deleteStock = (id) => {
      fetch(`stocks/${id}`, {
        method: "DELETE",
      });
    setStocks({})
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
    <UserContext.Provider value={{user, companies, login, logout, signup, loggedIn, addCompany, addStock, updateStock, deleteStock, stocks}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}