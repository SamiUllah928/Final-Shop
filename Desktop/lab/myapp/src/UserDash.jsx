import { Box, Typography, Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from './Redux/Action/authAction'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function UserDash() {
  let data = useSelector(state => state.Auth)

  let dispatch = useDispatch()
  let navigate = useNavigate()

  let handleLoginpage = () => {
    navigate('/Login')
  }
  let handleSignuppage = () => {
    navigate('/Signup')
  }

  let handleLogout = () => {
    dispatch(logout())

  }
  let handleChangepassword = () => {
    navigate('/ChangePassword')
  }
  useEffect(() => {
    if (!data?.isAuthenticated) {
      navigate('/login')
    }
  }, [data?.isAuthenticated])

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img style={{ width: '110px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_h7hIOHkoU4DyVIkNN4tAwk2on4PsLsbxEA&usqp=CAU" alt="" /></a>
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
                  <li><hr class="dropdown-divider" />Less </li>
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

              <div className="btn" style={{ display: 'flex', alignItems: "center", justifyContent: 'space-around', gap: '13px', border: 'none' }}>

              </div>

            </form>
          </div>
        </div>
      </nav>
      <div className='UserDash'>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', gap: '20px' }}>
          <Typography variant='h3'>User Information</Typography>
          <div>
            <b>Username:</b> <br /> <TextField value={data?.user?.username} />
          </div>
          <div>
            <b>Email:</b> <br /> <TextField value={data?.user?.email} />

          </div>
          <div>
            <b>Role:</b> <br /> <TextField value={data?.user?.role} />

          </div>
          <div>
            <b>Password:</b> <br /> <TextField value={data?.user?.password} />

          </div>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', mt: 2, gap: '12px' }}>
          <Button onClick={handleLogout} variant='contained' size='small'>Logout</Button>
          <Button variant='contained' size='small' onClick={handleChangepassword}>Change Password<ArrowForwardIcon /></Button>
        </Box>
      </div>
    </div>
  )
}
