import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login({ setUserData }) {

  let navigate = useNavigate();
  let goToHome = () => {
    let path = '/Home'
    navigate(path)
  }
  let [loading, setLoading] = useState(false)
  let [user, setUser] = useState({

    "email": "",
    "password": "",

  })

  let [errorList, seterrorList] = useState([])

  let SubmitFormData = async (e) => {
    e.preventDefault();
    let { data } = await axios.post("http://localhost:3003/api/v1/auth/signin", user)

    if (data.message == 'login') {
      console.log("error " + data.loginToken)
      localStorage.setItem('token', data.loginToken)
      
      setUserData();
      goToHome();

    }
    /* if (data.message == 'login' ) {
      console.log( data.token)
      setUserData()
      goToHome();
    } else {
      console.log("error "+ data)
  
    } */
    setLoading(true)
  }

  let getinputvalue = (e) => {
    let myUser = { ...user }
    myUser[e.target.name] = e.target.value;
    setUser(myUser)
  }
  return (
    <>
      {errorList.map((error, index) =>
        <div className='alert alert-danger w-50' key={index}>{error.message}</div>
      )}


      <div className="container text-center my-5">
        <div className="user my-3">
          <i className="fas fa-user-secret user-icon" />
          <h4 className="login">Login</h4>
        </div>


        <div className="card p-5 w-50 m-auto">

          <form onSubmit={SubmitFormData} method="POST" action="/handleLogin">
            <input onChange={getinputvalue} className="form-control my-4" placeholder="Enter your email" type="email" name="email" />
            <input onChange={getinputvalue} className="form-control my-4 " placeholder="Enter your Password" type="password" name="password" />

            <button type="submit" className="btn btn-default-outline my-4 w-100 rounded">
              {loading ? <i className="fa-solid fa-spinner fa-spin "></i> : 'Login'}
            </button>

            <p><Link className="text-muted forgot btn" to=''>I Forgot My Password</Link></p>
          </form>
        </div>
      </div>

    </>
  )
}
