import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  return (
    <Layout title="Register - Ecommerce App">
      <div className='register'>
        <h1>Register Page</h1>
        <form>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              className="form-control"
              id="exampleInputName1"
              placeholder='Enter your Name'
              onChange={(e)=> setName(console.log(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              placeholder='Enter your Email'
              onChange={(e)=> setEmail(console.log(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder='Enter your Password'
              onChange={(e)=> setPassword(console.log(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              className="form-control"
              id="exampleInputPhone1"
              placeholder='Enter your Phone'
              onChange={(e)=> setPhone(console.log(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              className="form-control"
              id="exampleInputAddress1"
              placeholder='Enter your Address'
              onChange={(e)=> setAddress(console.log(e.target.value))}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>

    </Layout>
  )
}

export default Register
