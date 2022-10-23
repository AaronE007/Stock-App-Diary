import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './context/user'


const Navbar = () => {

  const {user, logout} = useContext(UserContext)
  

  const userLogout = () => {
    fetch('/logout')
    .then(() => {
      logout()
    })
  }

  if(user){
    return (
      <div>
        <h1>Hello {user.username}</h1>
        <br/>
        <Link  to="/">Home</Link>
        <br/>
        <button onClick={userLogout}> Logout here</button>
      </div>
    )
  } else {
    return (
      <div>
        <Link  to="/">Home</Link>
        <Link  to="/login">Login</Link>
        <Link  to="/signup">Signup</Link>
      </div>
    )
  } 
}

export default Navbar

