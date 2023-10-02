import { Add_Product, Get_All_Product, Product_Loading_Attempt, Product_Loading_False, Product_Loading_True, } from "../Types";

const initialstate = {
    productlist: [],
    product: {},
    loading: false
}
const productReducer = (state = initialstate, action) => {
    switch (action.type) {
        case Product_Loading_Attempt:
            return {
                ...state,
                loading: true
            }
        case Product_Loading_True:
            return {
                ...state,
                loading: false
            }
        case Product_Loading_False:
            return {
                ...state,
                loading: false
            }
        case Get_All_Product:
            return {
                ...state,
                productlist: action.payload
            }
        case Add_Product:
            return {
                ...state,
                productlist: [...state.productlist,action.payload]
            }



        default:
            return {
                ...state,
            }

    }
}
export default productReducer;