import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user'


const Navbar = () => {

  const {user, logout, loggedIn} = useContext(UserContext)
  

  const userLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: {"Content-Type": 'application/json'}
    })
    .then(() => {
      logout()
    })
  }

  if(loggedIn){
    return (
      <div>
        <h1>Hello {user.username}</h1>
        <br/>
        <br/>
        <Link  to="/companies">Companies</Link>
        <br/>
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

