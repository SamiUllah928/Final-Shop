import axios from "axios"
import { Add_Product, Get_All_Product, Product_Loading_Attempt, Product_Loading_False, Product_Loading_True } from "../Types"


export let loadproducts = () => async (dispatch)=>{
try {
    dispatch({type:Product_Loading_Attempt})
    let mylog = await axios.get('http://localhost:5000/product') 
    console.log(mylog)
    dispatch({type: Product_Loading_True})
    dispatch({type: Get_All_Product,payload:mylog.data.data})
} catch (error) {
    console.log(error)
    dispatch({type:Product_Loading_False})
}
}


export let productadd = (option) => async (dispatch)=>{
try {
    dispatch({type:Product_Loading_Attempt})
    let mylog = await axios.post('http://localhost:5000/product/add-product', option) 
    console.log(mylog)
    dispatch({type: Product_Loading_True})
    dispatch({type: Add_Product,payload:mylog.data.data})
} catch (error) {
    console.log(error)
    dispatch({type:Product_Loading_False})
}
}