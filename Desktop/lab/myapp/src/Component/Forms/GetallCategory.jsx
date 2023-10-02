// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getallcatageries } from '../../Redux/Action/categoryAction'
// import MenuIcon from '@mui/icons-material/Menu';

// export default function GetallCategory() {
//     const [isbarClicked,setisbarClicked] = useState(false)
//     let dispatch=useDispatch()
//     const catlist = useSelector(state=>state.Category.categorylist)
    

//     let data=useSelector(state=> state.Auth)
//     console.log(data)
   
//    useEffect(()=>{
//     dispatch(getallcatageries())
//    },[])

//   return (
//     <div className='GetallCategory'>
//         <MenuIcon sx={{cursor:'pointer'}} onClick={()=>setisbarClicked(!isbarClicked)}/>
//         <ul style={{listStyle:'none',display:isbarClicked ? 'block' : 'none'}}>
//             {
//                 catlist.map((cat)=><li>{cat.name}</li>)
//             }
//         </ul>   

       


//     </div>
//   )
// }
