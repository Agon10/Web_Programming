import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "../../custom-axios/axios";

const UserProfile = () => {

    const [user, setUser] = useState({});
    const {userID} = useParams();
    console.log("Calling the userID through Params-> ",userID);
    useEffect(() => {
        axios.get("/users/" + userID).then((data) => {
            console.log("Inside useEffect",data.data);
            setUser( data.data);
        })
    },[]);
    console.log("Being called inside UserProfile ->",user);
    console.log(typeof user.languages);


    return (
        <section id="model-details">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="card bg-light mb-3" style={{"max-width": "100%"}}>
                            <div className="card-header"><h3>About my culture</h3></div>
                            <div className="card-body">
                                <p className="card-text">{user.description}</p>
                            </div>
                            <div className="card-footer">
                                <Link to={"/users/culture/question/" + user.userName}>
                                    <button className="btn btn-outline-dark">
                                        Ask me a question!
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card bg-light mb-3" style={{"max-width": "100%"}}>
                            <div className="card-header"><h3>Profile</h3></div>
                            <div className="card-body">
                                <ul style={{"list-style-type" : "none"}}>
                                    <li><span className="font-400">Name: </span><span
                                        className="profile-right">{user.userName}</span></li>

                                    <li>
                                        <span className="font-400">Culture: </span>
                                        <span className="profile-right">{user.culture}</span>
                                    </li>
                                    <li>
                                        <span className="font-400">Languages: </span>
                                        <span className="profile-right">
                                        <ul style={{"list-style-type":"none"}} className="text-capitalize">
                                    {user.languages && user.languages.map((item, key) => {
                                        console.log(item)
                                        return <li>{item.name}</li>
                                    })}
                                        </ul>
                                    </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <Link to={"/users/culture/followed/"+user.userName }>
                                    <button className="btn btn-outline-dark">
                                        Follow me!
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
};


export default UserProfile;
