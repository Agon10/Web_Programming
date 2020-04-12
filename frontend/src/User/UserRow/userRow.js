import React,{useEffect,useState} from 'react';
import {Link,useParams,useHistory} from "react-router-dom";
import axios from "../../custom-axios/axios";

const userRow = (props) => {
    console.log("UserRow props->", props);

    // const languageList = props.languages.map((language, index) =>{
    //     console.log(language);
    //     return (
    //         <LanguageRow name={language}/>
    //     )
    // });


    return (
        <tr className="text-capitalize">
            <td scope="col">{props.username}</td>
            <td scope="col">{props.culture}</td>
            <td scope="col">
                <ul style={{"list-style-type":"none"}} className="p-0 m-0">
                    {props.languages.map((item, key) => {
                        console.log(item)
                        return <li>{item.name}</li>
                    })}
                </ul>
            </td>
            <td scope="col">
                <Link to={"/users/culture/" + props.username}>
                    <button className="btn btn-sm btn-outline-dark">
                        <span><strong>Select  User</strong></span>
                    </button>
                </Link>
            </td>

        </tr>
    );
};

export default userRow;