import { User_Load, User_Loading_Attempt, User_Loading_False, User_Loading_True, User_Login, User_Logout } from "../Types";


const initialState = {
    isAuthenticated: false,
    loading: false,
    user: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case User_Loading_Attempt:
            return {
                ...state,
                loading: true
            }
        case User_Loading_True:
            return {
                ...state,
                loading: false
            }
        case User_Loading_False:
            return {
                ...state,
                loading: true
            }
        case User_Login:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
            case User_Load:
                return{
                    ...state,
                    isAuthenticated:true,
                    user: action.payload
                }
        case User_Logout:
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            }



        default:
            return {
                ...state
            }
    }
}
export default authReducer;