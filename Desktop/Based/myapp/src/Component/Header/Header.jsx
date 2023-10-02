import React from 'react'
import { Button, createTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// 
export const Header = () => {
    const  auth = useSelector(state => state.Auth.isAuthenticated)
    console.log(auth)

    const navigate = useNavigate()
    let handleSignUp = () => {
        navigate('/Signup')
    }
    let handleLogIn = () => {
        navigate('/Login')
    }
    let handleHome = () => {
        navigate('/Home')
    }
    let handleDashboard=()=>{
        navigate('/Dashboard')
    }
    const theme = createTheme()
    return (
        <div className='Header' style={{ display: 'grid', gridTemplateColumns: '30% 40% 30%', alignItems: 'center', justifyContent: 'space-around', width: '100%', height: '100px', backgroundColor: 'chocolate',boxShadow:theme.shadows[5] }}>
            <div className="logo" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <h1>LOGO</h1>
            </div>
            <div className="links">
                <ul style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center',listStyle:'none' }}>
                    <li style={{ cursor: 'pointer', color: 'white', fontSize: '18px', marginBottom: '7px' }} onClick={handleHome}>Home</li>
                    <li style={{ cursor: 'pointer', color: 'white', fontSize: '18px', marginBottom: '7px' }}>Content</li>
                    <li style={{ cursor: 'pointer', color: 'white', fontSize: '18px', marginBottom: '7px' }}>Profile</li>
                    <li style={{ cursor: 'pointer', color: 'white', fontSize: '18px', marginBottom: '7px' }}>Links</li>
                </ul>
            </div>
            <div className="btn" style={{ display: auth ? 'none' : 'flex' }}>
                <Button variant='contained' size='small' onClick={handleSignUp} sx={{marginRight:'80px', marginLeft:'100px'}}>Signup</Button>
                <Button variant='contained' size='small' onClick={handleLogIn}>Login</Button>
            </div>

            <div className="btn" style={{ display: !auth ? 'none' : 'flex' , marginLeft:'170px'}}>
                <Button variant='contained' size='large' color='success' onClick={handleDashboard}>Dashboard</Button>
            </div>
        </div>
    )
}
