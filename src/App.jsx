import { Header, Masseges, Navbar, Regester, User ,Logout ,Login ,Notfound } from './component/index_exports';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

      <Navbar />
      <Routes>
      <Route path='/' element={<Header />}></Route>
        <Route path='Login' element={<Login />}></Route>
        <Route path='Header' element={<Header />}></Route>
        <Route path='Masseges' element={<Masseges />}></Route>
        <Route path='Regester' element={<Regester />}></Route>
        <Route path='Logout' element={<Logout />}></Route>
        <Route path='User' element={<User />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>

    </>
  );
}

export default App;
