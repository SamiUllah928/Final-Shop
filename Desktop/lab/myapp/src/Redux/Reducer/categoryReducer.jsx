import { Add_Categories, Category_Loading_Attempt, Category_Loading_False, Category_Loading_True, Delete_Category, Get_All_Categories, Single_Category, Update_Category } from "../Types";


const initialState = {
    categorylist: [],
    category: {},
    loading: false
}


const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case Category_Loading_Attempt:
            return {
                ...state,
                loading: true
            }
        case Category_Loading_True:
            return {
                ...state,
                loading: false
            }
        case Category_Loading_False:
            return {
                ...state,
                loading: false
            }
        case Get_All_Categories:
            return {
                ...state,
                categorylist: action.payload
            }
            case Single_Category:
                return {
                    ...state,
                    category: action.payload
                }


        case Add_Categories:
            return {
                ...state,
                categorylist: [...state.categorylist, action.payload]
            }
        case Delete_Category:
            return {
                ...state,
                categorylist: state.categorylist.filter((cat) => cat._id !== action.payload)
            }
        case Update_Category:
            const index = state.categorylist.findIndex((cat) => cat._id === action.payload._id)
            state.categorylist.splice(index, 1, action.payload)
            return {
                ...state,
                category: action.payload,
                categorylist: state.categorylist
            }


        default:
            return {
                ...state,
            }
    }
}


// Exports
export default categoryReducer;