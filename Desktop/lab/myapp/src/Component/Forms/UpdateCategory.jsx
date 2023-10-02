import { Box, Button, Paper, TextField, Typography, createTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useNavigate } from 'react-router-dom';
import { updatecategory } from '../../Redux/Action/categoryAction';

export default function UpdateCategory() {
    const theme = createTheme()
    const navigate= useNavigate()
    const dispatch = useDispatch()
    let category = useSelector((state)=>state.Category.category)
    console.log(category)


    const [category_name, setcategory_name] = useState()

    useEffect(()=>{
        setcategory_name(category?.catagery_name)
    },[category])
    return (
        <div className='UpdateCategory'>
            <Box>
                <Paper sx={{display:'flex', flexDirection:'column', alignItems:'center', gap:'15px', mt:4, p:3}}>
                    <Typography variant='h4' color={theme.palette.primary.dark}>Update Your Category</Typography>
                    <TextField 
                    placeholder='Change Category Name' 
                     onChange={(e)=> setcategory_name(e.target.value)}
                     value={category_name ? category_name : ''}
                     ></TextField>
                    <Button variant='contained' size='medium' onClick={()=>dispatch(updatecategory(category._id,{catagery_name:category_name}))}>Update</Button>
                    <Button  variant='contained' size='medium' onClick={()=>navigate(-1)} > <ArrowBackSharpIcon/>Cancel</Button>
                </Paper>
            </Box>
        </div>
    )
}
