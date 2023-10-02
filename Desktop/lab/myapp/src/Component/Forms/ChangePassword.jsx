import { Box, TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changepassword } from '../../Redux/Action/authAction'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function ChangePassword() {
    let [oldpass,setoldpass]=useState()
    let[ newpass, setnewpass] =useState()
    let navigate=useNavigate()
    let dispatch =useDispatch()
    let data=useSelector(state=>state.Auth)
    console.log(data)

    let handleLoginpage=()=>{
        navigate('/Login')
    }
    let handleSignuppage=()=>{
        navigate('/Signup')
    }

    let handleChangepass=()=>{
        let option={
            oldpassword:oldpass,
            newpassword:newpass
        }
        dispatch(changepassword(option))
    }
  return (
    <div className='ChangePassword'>
        <div className="nav">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img style={{ width: '110px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_h7hIOHkoU4DyVIkNN4tAwk2on4PsLsbxEA&usqp=CAU"  alt="" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Menu</a>

                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" onClick={handleLoginpage}>Login</a>

                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" onClick={handleSignuppage}>Signup</a>

                                </li>
                             
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Contact Us
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Signup</a></li>
                                        <li><a class="dropdown-item" href="#">Login</a></li>
                                        <li><a class="dropdown-item" href="#">Logout</a></li>
                                        <li><hr class="dropdown-divider"/>Less </li>
                                        <li><a class="dropdown-item" href="#"></a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true">Viewport</a>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">

                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                             
                                   <div className="btn" style={{display:'flex', alignItems:"center", justifyContent:'space-around', gap:'13px', border:'none'}}> 
                                   </div>

                            </form> 
                             </div>
                             </div>
                            </nav>  
                            
                            </div>
                              <div>
                                

       
                            <Box sx={{display:'flex', flexDirection:"column", justifyContent:"space-around", alignItems:'center', gap:'20px'}}>
                        <Typography variant='h4'> Change Password: </Typography>
                        <TextField   type='text' placeholder='Old Password' onChange={(e)=> setoldpass(e.target.value)}/>
                        <TextField type='text' placeholder='New Password' onChange={(e)=> setnewpass(e.target.value)}/>
                        <Button variant='contained' onClick={handleChangepass}>Change</Button>
                        <Button  variant='contained'     onClick={()=>navigate(-1)}><KeyboardBackspaceIcon/>Cancel</Button>
                    </Box>
                     
                                
                                </div>     
                   
                            </div>
  )
}
