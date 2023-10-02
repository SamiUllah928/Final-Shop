import { Autocomplete, Box, Button, Paper, TextField, Typography, createTheme } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productadd } from '../../Redux/Action/productAction';
import { getallcatageries } from '../../Redux/Action/categoryAction';

export default function ProductAdd() {
    const catelist = useSelector(state => state.Category.categorylist)
    const shoplist = useSelector(state => state.Shop.userShops)
    console.log(catelist)
    const dispatch = useDispatch()
    let handleCreate = () => {
        const option = {
            productTitle, productDescription, images, price,
            catagery, instock, shop, brand, discount
        }
        dispatch(productadd(option))
    }
    const theme = createTheme()
    const [catagery, setcatagery] = useState()
    let [productTitle, setproductTitle] = useState()
    let [productDescription, setproductDescription] = useState()
    let [images, setimages] = useState()
    let [price, setprice] = useState()
    let [instock, setinstock] = useState()
    let [shop, setshop] = useState()
    let [brand, setbrand] = useState()
    let [discount, setdiscount] = useState()


    useEffect(() => {
        dispatch(getallcatageries())
    }, [dispatch])
    console.log(catagery)
    return (
        <div className='ProductAdd'>
            <Box>
                <Paper elevation={6} sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', p: 2, boxSizing: 'border-box', rowGap: 1 }}>
                    <Typography variant='h4' sx={{ textAlign: 'center', color: theme.palette.primary.dark }}>Add Product</Typography>
                    <Autocomplete options={shoplist?.map((shop)=>shop._id)} renderInput={(p)=><TextField type='text' {...p} label='Select Shop'/>} sx={{width:'230px'}} onChange={(e,val)=>setshop(val)}/>
                    <TextField type='text' placeholder='Product Name' onChange={(e) => setproductTitle(e.target.value)} />
                    <TextField type='text' placeholder=' Product Description' onChange={(e) => setproductDescription(e.target.value)} />
                    <TextField type='text' placeholder='image' onChange={(e) => setimages(e.target.value)} />
                    <TextField type='number' placeholder='Product Price' onChange={(e) => setprice(e.target.value)} />
                    {/* <TextField type='text' placeholder='Category' onChange={(e)=> setcatagery(e.target.value)}/> */}
                    <Autocomplete sx={{width:'230px'}} options={catelist?.map((p) => p.name)} renderInput={(cat) => <TextField {...cat} label="Select category" />} onChange={(e,val)=>setcatagery(val)}/>
                    <TextField type='number' placeholder='Product Instock' onChange={(e) => setinstock(e.target.value)} />
                    <TextField type='text' placeholder='Brand' onChange={(e) => setbrand(e.target.value)} />
                    <TextField type='number' placeholder='Product Discount' onChange={(e) => setdiscount(e.target.value)} />
                    <Button endIcon={<AddIcon />} variant='contained' onClick={handleCreate} >Create</Button>
                </Paper>
            </Box>
        </div>
    )
}
