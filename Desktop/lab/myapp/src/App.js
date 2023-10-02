import React, { useEffect } from 'react'
import  './App.css'
import Header from './Component/Header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Component/Forms/Signup'
import Login from './Component/Forms/Login'
import UserDash from './UserDash'
import GetallCategory from './Component/Forms/GetallCategory'
import setaxiostoken from './Redux/Reducer/setaxiostoken'
import { useDispatch } from 'react-redux'
import ChangePassword from './Component/Forms/ChangePassword'
import { loaduser } from './Redux/Action/authAction'
import ProductAdd from './Component/Forms/ProductAdd'
import AddCategory from './Component/Forms/AddCategory'
import { getallcatageries } from './Redux/Action/categoryAction'
import UpdateCategory from './Component/Forms/UpdateCategory'
import { getusershops } from './Redux/Action/shopAction'
import AddShop from './Component/Forms/AddShop'
import { loadproducts } from './Redux/Action/productAction'

export default function App() {
  setaxiostoken(localStorage.token)

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(loaduser())
    dispatch(getusershops())
    dispatch(loadproducts())
    dispatch(getallcatageries())
  },[])
  return (
    <div className='App'>

      <BrowserRouter>

      <Routes>

        <Route path='/' element={<Header/>}/>
        <Route path='/ChangePassword' element={<ChangePassword/>}/>
        <Route path='/getcategory' element={<GetallCategory/>}/>
        <Route path='/UserDash' element={<UserDash/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/add' element={<ProductAdd/>}/>
        <Route path='/addcategory' element={<AddCategory/>}/>
        <Route path='/updateCategory' element={<UpdateCategory/>}/>
        <Route path='/addproduct' element={<ProductAdd/>}/>
        <Route path='/add-shop' element={<AddShop/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
