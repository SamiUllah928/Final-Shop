import {combineReducers} from 'redux'
import authReducer from './authReducer'
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import shopReducer from './shopReducer';

const rootReducer = combineReducers({
    Auth: authReducer,
    Category: categoryReducer,
    Product: productReducer,
    Shop:shopReducer,
})
export default rootReducer;