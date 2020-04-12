import axios from '../custom-axios/axios'
import qs from 'qs'
import header from "../Header/header";

const UserService = {
    fetchAllUsers: ()=> {
        return axios.get("/users");
    },

    addUser : (user) => {
        const formParams = qs.stringify(user);
        console.log("these are the form params" , formParams);
        return axios.post("/users/register",formParams,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    },

    loginUser : (user) => {
        const formParams = qs.stringify(user);
        console.log("user login params", formParams);
        return axios.post("/users/login",formParams,
            { headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
        })
    },

    getUser : (userId) =>{
        return axios.get("/users/"+userId)
    },

    deleteUser: (userId) =>{
        return axios.delete("/users/" + userId)
    },

    getAllUsers: () =>{
        return axios.get("/users")
    },

    getCulture: (cultureName) =>
    {

        console.log(cultureName);

        return axios.get("/users/culture?cult=" + cultureName.culture)
    },

    followUser: (userID1,userID2) =>{
        return axios.post("/users/follow/" +userID1 +"/" + userID2)
    },

    postMessage: (message) =>{
        const formParams = qs.stringify(message)
        console.log(formParams);
        return axios.post("http://localhost:8080/user/post",formParams,{ headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }



};

export default  UserService;