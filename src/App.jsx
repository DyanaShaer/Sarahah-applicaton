import { Header, Masseges, Navbar, Regester, User, Logout, Login, Notfound, ProtectedRoutes } from './component/index_exports';
import {Navigate, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';


function App() {
  let [loginData, setloginData] = useState('')
  let setUserData = () => {
    let token = localStorage.getItem('token')
    let decoded = jwtDecode(token)
    setloginData(decoded)
    console.log( "hellologinData"+loginData.value) 
 }


 let logout = () => {
  localStorage.removeItem('token')
  setloginData(null)
  /*   goToLogin(); */
  Navigate('/Login')
}
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setUserData();
    }
  }, [])
  return (
    <>

      <Navbar  loginData={loginData} logout={logout}/>
      <Routes>
        <Route element={<ProtectedRoutes loginData={loginData} />}>
          <Route path='Home' element={<Home />}></Route>
          <Route path='Logout' element={<Logout />}></Route>
        </Route>
        <Route path='/' element={<Header />}></Route>
        <Route path='Login' element={<Login setUserData={setUserData} />}></Route>
        <Route path='Header' element={<Header />}></Route>
        <Route path='Masseges' element={<Masseges />}></Route>
        <Route path='Regester' element={<Regester />}></Route>
        <Route path='User' element={<User />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>

    </>
  );
}

export default App;
