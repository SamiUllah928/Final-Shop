import axios from 'axios'
import { Add_Category, Change_Password, User_Load, User_Loading_Attempt, User_Loading_False, User_Loading_True, User_Login, User_Logout } from '../Types'
import setaxiostoken from '../setaxiostoken'


//Function for Login
export let login = (option) => async (dispatch) => {
    try {
        dispatch({ type: User_Loading_Attempt })
        let mylog = await axios.post('http://localhost:5000/user/login', option)
        console.log(mylog)
        // 
        localStorage.setItem("token", mylog.data.token)
        // 
        dispatch({ type: User_Login, payload: mylog.data.data })
        dispatch({ type: User_Loading_True })
    } catch (error) {
        console.log(error)
        dispatch({ type: User_Loading_False })

    }
}

//function for Logout

export let logout = () => async (dispatch) => {
    dispatch({ type: User_Loading_Attempt })
    // 
    localStorage.removeItem("token")

    // 
    dispatch({ type: User_Logout })
    dispatch({ type: User_Loading_True })
}

// Function for Signup
export let signup = (option) => async (dispatch) => {
    try {
        dispatch({ type: User_Loading_Attempt })
        let mylog = await axios.post('http://localhost:5000/user/signup', option)
        console.log(mylog)
        dispatch({ type: User_Loading_True })
    } catch (error) {
        console.log(error)
        dispatch({ type: User_Loading_False, payload: error.response.data })

    }
}

// Load User Function
export let loaduser = () => async (dispatch) => {
    try {
        dispatch({ type: User_Loading_Attempt })
        let mylog = await axios.get('http://localhost:5000/user/')
        console.log(mylog)
        dispatch({ type: User_Load, payload: mylog.data.data })
        dispatch({ type: User_Loading_True })
    } catch (error) {
        dispatch({ type: User_Loading_False, payload: error.response.data })
    }
}

// change password
export let changepassword = (option) => async (dispatch) => {
    try {
        dispatch({ type: User_Loading_Attempt })
        let mylog = await axios.post('http://localhost:5000/user/passwordchange',option)
        console.log(mylog)
        dispatch({ type: Change_Password, payload: mylog.data})
        dispatch({ type: User_Loading_True })
    } catch (error) {
        dispatch({ type: Change_Password, payload: error.response.data })

        dispatch({ type: User_Loading_False, payload: error.response.data })
    }
}

// Add Category Fuction ( by using firebase)

export let addcategory = (option) => async (dispatch) => {
    try {
        dispatch({ type: User_Loading_Attempt })
        let mylog = await axios.post('http://localhost:5000/catagery/addcatagery', option)
        console.log(mylog)
       dispatch({type:Add_Category})
        dispatch({ type: User_Loading_True })
    } catch (error) {
        console.log(error)
        dispatch({ type: User_Loading_False })

    }
}
