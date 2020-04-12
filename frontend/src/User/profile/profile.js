import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "../../custom-axios/axios"


const Profile = (props) => {
    const [user, setUser] = useState({});
    console.log("Calling inside the profile of logged user->", props.user.name);
    useEffect(() => {
        axios.get("/users/" + props.user.name).then((data) => {
            setUser(data.data)
        })
    }, []);


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
                                <Link to={"/user/profile/followers/" + user.userName}>
                                    <button className="btn btn-outline-dark">
                                        People I follow/Favorites!
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>

                <div className="col-12 col-md-6">
                    <div className="card bg-light mb-3" style={{"max-width": "100%"}}>
                        <div className="card-header"><h3>Profile</h3></div>
                        <div className="card-body">
                            <ul style={{"list-style-type": "none"}}>
                                <li><span className="font-400">Name: </span><span
                                    className="profile-right">{user.userName}</span></li>

                                <li>
                                    <span className="font-400">Culture: </span>
                                    <span className="profile-right">{user.culture}</span>
                                </li>
                                <li>
                                    <span className="font-400">Languages: </span>
                                    <span className="profile-right">
                                        <ul style={{"list-style-type": "none"}} className="text-capitalize">
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
                            <Link to={"/user/profile/questions/" + user.userName}>
                                <button className="btn btn-outline-dark">
                                    Questions/Replies to my Questions!
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>

                </div>
            </div>
        </section>
    );
};

export default Profile;