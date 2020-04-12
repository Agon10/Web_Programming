import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "../custom-axios/axios"

const FollowSuccess =(props)=>{
    const[follow,setFollow] = useState({});
    const{userID} = useParams();
    console.log("User currently logged",props.follower.name);
    console.log(userID);

    useEffect(()=>{
         axios.post("/users/follow/" +props.follower.name +"/" + userID)
    },[])

    return(
        <div>
            <h3>The follow process has been successful!</h3>
            <Link to={"/users/culture/" + userID}>
                <button className="btn btn-sm btn-outline-dark">
                    <span><strong>Go back!</strong></span>
                </button>
            </Link>
        </div>
    )
};

export default FollowSuccess;