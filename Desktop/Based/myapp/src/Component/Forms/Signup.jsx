import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../Redux/Action/authAction';

export default function Signup() {
    const [username,setusername]=useState()
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    let data=useSelector(state=> state.Auth)
    console.log(data)

    let option={
        username,email,password
    }

    let HandleSignpage=()=>{
         dispatch(signup(option))
         navigate('/Login')
    //   alert("login Successfully")

    }

    useEffect(()=>{
        setTimeout(() => {
            if (data.isAuthenticated) {

                navigate('/Login')
            }
        }, 2000);
    },[data.isAuthenticated])
    return (
        <div className='Signup' style={{ marginTop: '40px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', gap: '25px' }}>
                <h1>Signup Page:</h1>
                <TextField id="filled-basic" label="Name" variant="filled" type='text' onChange={(e)=> setusername(e.target.value)}/>
                <TextField id="filled-basic" label="Email" variant="filled" type='email' onChange={(e)=> setemail(e.target.value)} />
                <TextField id="filled-basic" label="Password" variant="filled" type='password'onChange={(e)=> setpassword(e.target.value)} />
                <Button variant="outlined" color='error' onClick={HandleSignpage}>Signup</Button>
            </Box>
        </div>
    )
}
