import axios from "axios"
import { Add_Categories, Category_Loading_Attempt, Category_Loading_False, Category_Loading_True, Delete_Category, Get_All_Categories, Single_Category, Update_Category } from "../Types"

// Getallcatagerie
export let getallcatageries = () => async (dispatch) => {
    try {
        dispatch({ type: Category_Loading_Attempt })
        let mylog = await axios.get('http://localhost:5000/catagery/')
        console.log(mylog)
        dispatch({ type: Get_All_Categories, payload: mylog?.data?.categoryList })
        dispatch({ type: Category_Loading_True })

    } catch (error) {
        console.log(error)
        dispatch({ type: Category_Loading_False, payload: error.response.data })
    }
}

// Add catagerie
export let addcategory = (option) => async (dispatch) => {
    try {
        dispatch({ type: Category_Loading_Attempt })
        let mylog = await axios.post('http://localhost:5000/catagery/addcatagery', option)
        console.log(mylog)
        dispatch({ type: Add_Categories, payload: mylog?.data?.catagery })
        dispatch({ type: Category_Loading_True })

    } catch (error) {
        console.log(error)
        dispatch({ type: Category_Loading_False, payload: error.response.data })
    }
}

// Delete catagerie
export let deletecategory = (id) => async (dispatch) => {
    try {
        dispatch({ type: Category_Loading_Attempt })
        let mylog = await axios.delete('http://localhost:5000/catagery//delete-category/' + id)
        console.log(mylog)
        dispatch({ type: Delete_Category, payload: id })
        dispatch({ type: Category_Loading_True })

    } catch (error) {
        console.log(error)
        dispatch({ type: Category_Loading_False, payload: error.response.data })
    }
}

// Update catagerie
export let updatecategory = (id, option) => async (dispatch) => {
    try {
        dispatch({ type: Category_Loading_Attempt })
        let mylog = await axios.put('http://localhost:5000/catagery/' + id, option)
        console.log(mylog)
        dispatch({ type: Update_Category, payload: mylog.data.catagery })
        dispatch({ type: Category_Loading_True })
    } catch (error) {
        console.log(error)
        dispatch({ type: Category_Loading_False, payload: error.response.data })
    }
}

// Single Category
export let singlecategory = (id) => async (dispatch) => {
    try {
        dispatch({ type: Category_Loading_Attempt })
        let mylog = await axios.get('http://localhost:5000/catagery/cat/' + id)
        console.log(mylog)
        dispatch({ type: Single_Category, payload: mylog.data.data })
        dispatch({ type: Category_Loading_True })
    } catch (error) {
        console.log(error)
        dispatch({ type: Category_Loading_False, payload: error.response.data })
    }
}


