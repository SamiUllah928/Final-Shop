import { Box, Button, Input, Paper, TextField, Typography, createTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcategory, deletecategory, getallcatageries, singlecategory } from '../../Redux/Action/categoryAction'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { Storage } from '../../firebase'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom'



export default function AddCategory() {

    let catlist = useSelector(state => state.Category.categorylist)
    console.log(catlist)
    let data = useSelector(state => state.Auth)
    console.log(data)
    const getyalllist = useSelector(state => state.Category.categorylist)
    console.log(getyalllist)
    const dispatch = useDispatch()
    const theme = createTheme()
    let [addcate, setaddcate] = useState()
    let [upload, setupload] = useState()
    const [load, setload] = useState(false)
    const [prog, setprog] = useState()

    const theam = createTheme()
    let navigate = useNavigate()

    let handleAddcate = () => {
        let option = {
            catagery_name: addcate,
            categoryImage: upload
        }
        dispatch(addcategory(option))
    }

    let handleUpload = (files) => {
        setload(true)

        const file = files
        const location = ref(Storage, `Category/${data?.user?.name}/${file.name}`)
        const upload = uploadBytesResumable(location, file)
        upload.on(
            "state_changed",
            (snapshot) => {
                const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100
                setprog(Math.floor(progress))
            },
            (error) => {
                console.log(error)
            },
            async () => {
                const DownloadUrl = await getDownloadURL(location)
                setupload(DownloadUrl)
                setload(false)
            }

        )
    }
    let handleLoginpage = () => {
        navigate('/Login')
    }
    let handleSignuppage = () => {
        navigate('/Signup')
    }

    let handleUpdatecate = (id) => {
        // console.log(id)
        dispatch(singlecategory(id))
        navigate('/UpdateCategory')
    }

    useEffect(() => {
        dispatch(getallcatageries())
    }, [dispatch])

    return (
        <div className='AddCategory'>
            {/* header */}
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

            {/*header */}
            <Box>
                <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', gap: '20px', mt: 3, p: 3 }}>
                    <Input id='upload' type='file' hidden onChange={(e) => handleUpload(e.target.files[0])} />
                    <Typography variant='h4' color={theam.palette.primary.main}>Add Category</Typography>

                    <Box  sx={{ display: 'flex', flexDirection: 'column',gap:'15px' }}>
                        <TextField type='text' label="Category Name" variant="outlined" onChange={(e) => setaddcate(e.target.value)} />
                        <label htmlFor='upload'>
                            <Box variant='outlined' sx={{ bgcolor: theme.palette.primary.dark, textTransform: 'uppercase', borderRadius: '6px', padding: '6px', color: '#fff', cursor: 'pointer', boxShadow: theme.shadows[3], '&:hover': { bgcolor: theme.palette.primary.main, boxShadow: theme.shadows[7] } }} >
                                <Typography sx={{ userSelect: 'none' }}>Upload Image</Typography>
                            </Box>
                        </label>
                    </Box>

                    <Button variant='contained' size='large' onClick={handleAddcate} >{load ? `Progress: ${prog}%` : "Add Category"}</Button>
                    <Typography variant='h4' sx={{ textAlign: 'center' }}> Total Categories: {catlist.length}</Typography>
                </Paper>
            </Box>


            <Box>
                <Paper>
                    <Typography variant='h4'>All Categories </Typography>

                    <ul>
                        {
                            // getyalllist.map((cat => <li>{cat.name}</li>))
                            catlist?.map((cat) =>
                                <Box>
                                    <Typography ><li>{cat.name}</li></Typography>
                                    <Typography><li>{cat._id}</li></Typography>
                                    <Typography><li>{cat.image}</li></Typography>
                                    <Box sx={{ display: 'flex', gap: '15px' }}>
                                        <Button variant='contained' size='small' onClick={() => dispatch(deletecategory(cat._id))} >Delete</Button>
                                        <Button variant='contained' size='small'  onClick={()=>handleUpdatecate(cat._id)}  >Edit <ArrowRightIcon/></Button>

                                    </Box>
                                </Box>
                            )

                        }
                    </ul>
                </Paper>
            </Box>
        </div>
    )
}
