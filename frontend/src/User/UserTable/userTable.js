import React,{useEffect,useState} from 'react';
import {Link,useParams,useHistory} from "react-router-dom";
import axios from "../../custom-axios/axios";
import UserRow from "../../User/UserRow/userRow";
import LanguageRow from "../../Language/Language Row/languageRow";

const userTable = (props) =>{
    console.log("UserTable variables ->",props.users);

    const userList = props.users.map((user,index) =>{

        console.log("Iterating array->",user);

        return (
            <UserRow username={user.userName} culture={user.culture} culture_description={user.description} languages={user.languages}/>

            )
    });




    return (
        <div className="container mt-5">
            <h4 className="text-upper text-left">Users found by culture</h4>
            <div className="table-responsive">
                <table className="table tr-history table-striped small">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Culture</th>
                        <th scope="col">Languages</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userList}
                    </tbody>
                </table>
            </div>

        </div>
    )

};

export default userTable;
