import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "../../custom-axios/axios"

const UserFollowers = (props) => {
    const [followers, setFollowers] = useState({
        arrFollowers: []
    });
    const {userID} = useParams();
    useEffect(() => {
        axios.get("/users/followers/" + userID).then((data) => {
            setFollowers({
                arrFollowers: data.data
            });
        })
    }, []);
    console.log("Followers of the user are ->", followers.arrFollowers)
    return (
        <div>
            <span className="font-400">Followers: </span>
            <span className="profile-right">
                                        <ul>
                                    {followers.arrFollowers&& followers.arrFollowers.map((item, key) => {
                                        console.log(item.userName)
                                        return <li>{item.userName}</li>
                                    })}
                                        </ul>
                                    </span>
        </div>
    )
};

export default UserFollowers;