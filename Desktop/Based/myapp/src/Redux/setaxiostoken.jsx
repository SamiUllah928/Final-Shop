import axios from 'axios'

export let  setaxiostoken=(token)=>{
if (token) {
    axios.defaults.headers["x_auth"]=token
    
}else{
    delete axios.defaults.headers["x_auth"]

}
}
export default setaxiostoken;