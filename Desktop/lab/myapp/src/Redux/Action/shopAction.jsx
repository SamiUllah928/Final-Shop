import axios from "axios"
import { Add_Shop, Shop_Loading_Attempt, Shop_Loading_False, Shop_Loading_True, User_Shops } from "../Types"



export let getusershops = () =>async(dispatch) =>{
    try {
        dispatch({type:Shop_Loading_Attempt})
        const shop = await axios.get('http://localhost:5000/shop/usershops')
        console.log(shop)
        dispatch({type:User_Shops,payload:shop.data.data})
        dispatch({type:Shop_Loading_True})
    } catch (error) {
        dispatch({type:Shop_Loading_False})
        console.log(error)
    }
}


export let addshop = (option) =>async(dispatch) =>{
    try {
        dispatch({type:Shop_Loading_Attempt})
        const shop = await axios.post('http://localhost:5000/shop/add-shop',option)
        console.log(shop)
        dispatch({type:Add_Shop,payload:shop.data.data})
        dispatch({type:Shop_Loading_True})
    } catch (error) {
        dispatch({type:Shop_Loading_False})
        console.log(error)
    }
}