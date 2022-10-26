import React, {useState, useEffect} from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
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
      setMyCompanies([...mycompanies, data])
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

  }

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
  }

  const logout = () => {
    setUser({})
    setLoggedIn(false)
    setCompanies({})
  }

  const signup = (user) => {
    setUser(user)
    setLoggedIn(true)
   }

  return (
    <UserContext.Provider value={{user, companies, login, logout, signup, loggedIn, addCompany, addStock, updateStock, deleteStock, mycompanies}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}