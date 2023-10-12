import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { toast } from 'react-toastify'
import '../../styles/AuthStyles.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  // Form Function
  const handleSumbit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {email, password})
      if(res.data.success){
        toast.success(res.data.message)
        navigate('/')
      } else{
        toast.error(res.data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }

  return (
    <Layout title="Login - Ecommerce App">
      <div className='form-container'>
        <h1>Login Page</h1>
        <form onSubmit={handleSumbit}>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              placeholder='Enter your Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder='Enter your Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>

    </Layout>
  )
}

export default Login
