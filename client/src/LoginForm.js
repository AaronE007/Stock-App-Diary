import React from 'react'

const LoginForm = () => {
  const {login} = useContext(UserContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);







  return (
    <div>
    <div>
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
      <input onChange={(e) => setUsername(e.target.value)} type="text" id="name" value={username} required/>
        <br/>
        <br/>
      <label>Password: </label>
      <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" value={password} required/>
        <br/>
        <br/>
      <label>Password Confirm: </label>
      <input onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" id="password_confirmation" value={passwordConfirmation}  required/>
      <br/>
      <br/>
      <input type="submit" value="Login" />
    </form>
    <ul>
      {errors}
    </ul>
  </div> 
    </div>
  )
}

export default LoginForm


