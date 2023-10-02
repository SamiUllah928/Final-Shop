import React from 'react'
// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom'


// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


const steps = [
    {
        label: 'Select campaign settings',
        description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];


export default function Header() {
    let navigate=useNavigate()
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    let handleLoginpage=()=>{
        navigate('/Login')
    }
    let handleSignuppage=()=>{
        navigate('/Signup')
    }
    let handleHome = () =>{
        navigate('/AddCategory')
    }
    return (
        <div className='Header'>
            <div className="head">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" ><img style={{ width: '110px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_h7hIOHkoU4DyVIkNN4tAwk2on4PsLsbxEA&usqp=CAU"  alt="" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" onClick={handleHome}>Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" >Menu</a>

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
                                        <li><a class="dropdown-item" >Signup</a></li>
                                        <li><a class="dropdown-item" >Login</a></li>
                                        <li><a class="dropdown-item" >Logout</a></li>
                                        <li><hr class="dropdown-divider"/>Less </li>
                                        <li><a class="dropdown-item" ></a></li>
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
            {/* carousel */}
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.ytimg.com/vi/qpx6SPjSVhs/maxresdefault.jpg" class="d-block w-100" alt="No Internet" style={{ width: '70%', height: '80vh' }} />
                        <div class="carousel-caption d-none d-md-block">
                            <p style={{color:'black', fontWeight:'700'}}>What is the good of your stars and trees, your sunrise and the wind, if they do not enter into our daily lives</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-psd/furniture-facebook-cover-web-banner-template_237398-329.jpg?size=626&ext=jpg" class="d-block w-100" alt="No Internet" style={{ width: '90%', height: '80vh' }} />
                        <div class="carousel-caption d-none d-md-block">
                            <p style={{color:'black', fontWeight:'700'}}>Go confidently in the direction of your dreams!... In the end, it's not the years in your life that count.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-psd/minimal-furniture-facebook-cover-page-template_237398-158.jpg?size=626&ext=jpg&ga=GA1.2.496846053.1694205570&semt=ais" class="d-block w-100" alt="No Internet" style={{ width: '90%', height: '80vh' }} />
                        <div class="carousel-caption d-none d-md-block">
                            <p style={{color:'yellow', fontWeight:'700'}}>What makes the desert beautiful is that somewhere hides well. Into the desert I go, to lose my mind and find my soul</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?" style={{ margin: '30px   ' }}>Click here</button>



            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <label for="disabledRange" class="form-label"></label>
                    <input type="range" class="form-range" id="disabledRange" disabled></input>

                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            For more Guidness
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The word furniture comes from the French fourniture, which means equipment. In most other European languages, however, the corresponding word (German Möbel, French meuble, Spanish mueble, Italian mobile) is derived from the Latin adjective mobilis, meaning movable. <code>.Wood-Talwandi Musa Khan (TMK)</code> class. Some of the most popular furniture styles are modern, Scandinavian, mid-century modern, mission style, Art Deco, Victorian, contemporary, and industria
                        </div>
                    </div>


                    {/* mui */}
                    <div className="cards" style={{ display: 'grid', gridTemplateColumns: "25% 25% 25%", justifyContent: 'space-around', marginTop: '60px', marginBottom: '30px' }}>
                        <div className="card1">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia sx={{height:'200px', objectFit:'contain'}}
                                        component="img"
                                        height="120"
                        image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww&w=1000&q=80"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Couch
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Couch are a widespread group of squamate reptiles, with over 7,000 species,[1] ranging across all continents except Antarctica, as well as most oceanic island chains. The group is paraphyletic since it excludes the snakes and Amphisbaenia, although some lizards are more closely related to
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="card1">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia sx={{height:'200px', objectFit:'contain'}}
                                        component="img"
                                        height="140"
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5bkgiJHX08TcUDzkkasujtTE6OpzB_B7_Q&usqp=CAU"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Bed Set
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Bed and  are African equines with distinctive black-and-white striped coats. There are three living species: the Grévy's zebra, plains zebra, and the mountain zebra. Zebras share the genus Equus with horses and asses, the three groups being the only living members of the family Equidae.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="card1">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia sx={{height:'200px', objectFit:'contain'}}
                                        component="img"
                                        height="140"
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7UIgIylqfL20lDRYpuJDyJTQjQ-ueQIZkw&usqp=CAU"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Chair
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            The Chairs is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body; short, rounded head; round ears; and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                       <div className="boxes">
                      
            </div>


                    </div>
                    {/* mui */}

                </div>
            </div>
        </div>



    )
}
