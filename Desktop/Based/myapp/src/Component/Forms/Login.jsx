import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/Action/authAction';

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  let option = {
    email, password
  }

  let data = useSelector(state => state.Auth)
  console.log(data)

  let HandleLoginPage = () => {
    dispatch(login(option))
  }

  useEffect(() => {
    if (data.isAuthenticated) {
      navigate('/Dashboard')
    }
  }, [data.isAuthenticated])
  return (
    <div className='Login' style={{ marginTop: '40px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', gap: '25px' }}>
        <h1>Login Page:</h1>
        <TextField id="filled-basic" label="Email" variant="filled" type='email' onChange={(e) => setemail(e.target.value)} />
        <TextField id="filled-basic" label="Password" variant="filled" type='password' onChange={(e) => setpassword(e.target.value)} />
        <Button variant="outlined" color='success' onClick={HandleLoginPage}>Login</Button>

      </Box>
    </div>
  )
}
