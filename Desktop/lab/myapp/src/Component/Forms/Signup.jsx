import { Box, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../Redux/Action/authAction';


export default function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let [username, setusername] = useState()
    let [email, setemail] = useState()
    let [password, setpassword] = useState()

    let data = useSelector(state => state.Auth)
    console.log(data)

    let option = {
        username,
        email,
        password
    }

    let handleSignup = () => {
        dispatch(signup(option))
        navigate('/Login')
    }
let handleLoginpage=()=>{
    navigate('/Login')
}
let handleSignuppage=()=>{
    navigate('/Signup')
}



    return (
        <div className='Signup'>
            <div className="head">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class= "navbar-brand" href= "#"><img style={{ width: '40px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU  " alt="" /></a>
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
                                        {/* <li><hr class="dropdown-divider"/>Less </li> */}
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
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'space-around', gap: '15px', mt: 3, padding: '10px' }}>
                <Typography variant='h6'>Signup</Typography>
                {/* <p>{toggle }</p> */}
                <TextField placeholder='Username' type='text' onChange={(e) => setusername(e.target.value)} />
                <TextField placeholder='Email' type='email' onChange={(e) => setemail(e.target.value)} />
                <TextField placeholder='Password' type='password' onChange={(e) => setpassword(e.target.value)} />
                <button type="button" class="btn btn-light" onClick={handleSignup}>Signup</button>

            </Box>
        </div>
    )
}
