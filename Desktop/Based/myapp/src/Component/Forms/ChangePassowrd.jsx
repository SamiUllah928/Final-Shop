import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Button, TextField} from '@mui/material'
import { changepassword } from '../../Redux/Action/authAction'


export default function ChangePassword() {
    let [olld,setolld]=useState()
    let [neew,setneew]=useState()
    let dispatch=useDispatch()
    let navigate=useNavigate()
   
    let data=useSelector(state=>state.Auth)
    console.log(data)


let handleChangepass=()=>{
    let option={
        oldpassword:olld,
        newpassword:neew
    }
   dispatch(changepassword(option))
}
  return (
    <div className='changepassword' style={{display:'flex',flexDirection:'column', alignItems:'center',
    justifyContent:'space-around', gap:"14px", marginTop:'50px'}}>
      <h1>Change Password</h1>
      <TextField id="standard-basic" label="Standard" variant="standard"  placeholder='Old Password' onChange={(e)=> setolld(e.target.value)}/>
      <TextField id="standard-basic" label="Standard" variant="standard" placeholder='New Password' onChange={(e)=> setneew(e.target.value)} />
        <Button onClick={handleChangepass}>Change</Button>
        <Button onClick={()=>navigate(-1)}>Cancel</Button>
    </div>
  )
}
