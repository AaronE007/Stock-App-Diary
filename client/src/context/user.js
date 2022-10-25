import React, {useState, useEffect} from "react";

const UserContext = React.createContext();


function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const[stocks, setStocks] = useState([])
  const [companies, setCompanies] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [mycompanies, setMyCompanies] = useState([])



  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data) 
        if (data.error) {
        setLoggedIn(false)
        setMyCompanies([])
        setCompanies([])
      }else {
        setLoggedIn(true)
        setMyCompanies(data.companies)
        fetchCompanies()
      }
    })
  }, [])


  const fetchCompanies = () =>{
    fetch('/companies')
    .then((r) => r.json())
    .then(data => setCompanies(data))
  }

  // const fetchStocks = () => {
  //   fetch('/stocks')
  //   .then(res => res.json())
  //   .then(data => setStocks(data))
  // }

  const addCompany = (stock) => {
    fetch('/companies', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(stock)
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

  const login = (user) => {
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
    <UserContext.Provider value={{user, companies, stocks, login, logout, signup, loggedIn, addCompany, addStock, mycompanies}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}