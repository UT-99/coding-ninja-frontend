import React from 'react'
import '../styles/Login.css'



const Login = () => {
    const handlechange = () =>{
        
    }
    const handlesubmit = () =>{

    }
  return (
    <div className="loginbody" >
    <form className='form_container'>
    
  <label htmlFor="email">Email : </label>
    <input
    type="email"
    name='email'
    placeholder="Email"
    className="input-field"
    onChange={handlechange}

  />
  <label htmlFor="password">Password : </label>
    <input
    type="text"
    name='password'
    placeholder="Password"
    className="input-field"
    onChange={handlechange}

  />
    <button type="submit" className="submit-button" onClick={handlesubmit}>Submit</button>
  </form>
    </div>
  )
}

export default Login