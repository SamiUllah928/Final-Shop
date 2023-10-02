import { Box, TextField, Typography ,Button, Autocomplete} from '@mui/material'

import React, { useState } from 'react'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { useDispatch } from 'react-redux'
import { addshop } from '../../Redux/Action/shopAction'

export default function AddShop() {
    const disptach = useDispatch()
    const [shopname, setshopname] = useState()
    const [aboutShop, setaboutShop] = useState()
    const [catagery, setcatagery] = useState()
    const [shopavatar, setshopavatar] = useState("https://cdn3.vectorstock.com/i/1000x1000/54/32/avatar-man-with-shopping-store-vector-10805432.jpg")
    const [shopphone, setshopphone] = useState()
    const [country, setcountry] = useState()
    const [city, setcity] = useState()
    const [streetaddress, setstreetaddress] = useState()
    const [shopbanner, setshopbanner] = useState("https://cdn3.vectorstock.com/i/1000x1000/54/32/avatar-man-with-shopping-store-vector-10805432.jpg")
    const [Shoptype, setShoptype] = useState()
    const [Brands, setBrands] = useState()

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,rowGap:1}}>
            <Typography variant='h5'>Add Shop Form</Typography>
            <TextField
                type='text'
                placeholder='Shop Name'
                onChange={(e) => setshopname(e.target.value)}
            />
            <TextField
                type='text'
                placeholder='About Shop'
                onChange={(e) => setaboutShop(e.target.value)}
            />
            <TextField
                type='text'
                placeholder='Shop Category'
                onChange={(e) => setcatagery(e.target.value)}
            />
            <TextField
                type='text'
                placeholder='Shop Logo'
                onChange={(e) => setshopavatar(e.target.value)}
            />
            <TextField
                type='text'
                placeholder='Shop Phone'
                onChange={(e) => setshopphone(e.target.value)}
            />
            <TextField
                type='text'
                placeholder='Country'
                onChange={(e) => setcountry(e.target.value)}
            />
            <TextField
                type='text'
                placeholder='City'
                onChange={(e) => setcity(e.target.value)}
            />
            <TextField
                type='text'
                placeholder='Street Address'
                onChange={(e) => setstreetaddress(e.target.value)}
            />
            <TextField
                type='text'
                placeholder='Brand'
                onChange={(e) => setBrands(e.target.value)}
            />
            <TextField
                type='text'
                placeholder='Shop Banner'
                onChange={(e) => setshopbanner(e.target.value)}
            />
            <Autocomplete 
            sx={{width:'230px'}}
            options={["Service", "Retail", "Whole Sale"]}
            renderInput={(p)=><TextField type='text' {...p} label='Shop Type'/>}
            onChange={(e,val)=>setShoptype(val)}
            />
            <Button variant='contained' endIcon={<ArrowForward/>} onClick={()=>disptach(addshop({
                shopname,
                aboutShop,
                catagery,
                shopavatar,
                shopphone,
                country,
                city,
                streetaddress,
                shopbanner,
                Shoptype,
                Brands,
            }))}>Create</Button>
        </Box>
    )
}
