import { Add_Shop, Shop_Loading_Attempt, Shop_Loading_False, Shop_Loading_True, User_Shops } from "../Types"



const initialState = {
    userShops:[],
    shop:{},
    loading:false
}


const shopReducer = (state = initialState, action) =>{
    switch (action.type) {
        case Shop_Loading_Attempt:
            return{
                ...state,
                loading:true
            }
        case Shop_Loading_True:
            return{
                ...state,
                loading:false
            }
        case Shop_Loading_False:
            return{
                ...state,
                loading:false
            }
        case User_Shops:
            return{
                ...state,
                userShops:action.payload
            }
        case Add_Shop:
            return{
                ...state,
                userShops:[...state.userShops,action.payload]
            }
       
    
        default:
            return{
                ...state
            }
    }
}


export default shopReducer
