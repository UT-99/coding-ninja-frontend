import React from 'react'
import '../styles/Enroll.css'

const EnrollNow = () => {

  const handlechange = () =>{
      
  }
  const handlesubmit = () =>{

  }
return (
 
  <div className='loginbody'>
  <form className='form_container'>
  <label htmlFor="stuname">Name : </label>
  <input
    type="text"
    name='stuname'
    placeholder="Enter Name.."
    className="input-field"
    onChange={handlechange}

  />
  <label htmlFor="department">Department : </label>
  <input
    type="text"
    name='department'
    placeholder="Enter Department"
    className="input-field"
    onChange={handlechange}

  />
  <label htmlFor="technology">Technology : </label>
  <input
  type="text"
  name='technology'
  placeholder="Enter Technology"
  className="input-field"
  onChange={handlechange}

/>
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

export default EnrollNow