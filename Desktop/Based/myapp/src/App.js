import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Component/Forms/Signup'
import Login from './Component/Forms/Login'
import { Header } from './Component/Header/Header'
import Home from './Component/Header/Home'
import Dashboard from './Dashboard'
import {setaxiostoken} from './Redux/setaxiostoken'
import ChangePassword from './Component/Forms/ChangePassowrd'
import { useDispatch } from 'react-redux'
import { loaduser } from './Redux/Action/authAction'
import AddCategory from './Component/Forms/AddCategory'

export default function App() {
  setaxiostoken(localStorage.token)

  const dispatch = useDispatch()
  useEffect(()=>{dispatch(loaduser())},[])
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/addcategory' element={<AddCategory />} />
          <Route path='/changepassword' element={<ChangePassword />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
