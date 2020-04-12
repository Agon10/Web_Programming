import React, {useEffect, useState} from "react";
import {Link,useParams} from "react-router-dom";
import axios from "../../custom-axios/axios"
import QuestionRow from "../QuestionRow/questionRow";

const UserQuestion = () =>{
    const[messages,setMessages] = useState({
        messageArr : []
    });
    const{userID} = useParams();
    useEffect(()=>{
        axios.get("/user/post/receiver/" + userID).then((data)=>{
            setMessages({
                messageArr : data.data
            })
        })
    },[]);

    const questionList = messages.messageArr.map((item,index)=>{

       return(
            <QuestionRow content={item.content} user={item.sender.userName}/>
       );
    });

    console.log("Messages of the user->",messages.messageArr);

    return(

        <div className="container mt-5">
            <h4 className="text-upper text-left">Questions/Replies</h4>
            <div className="table-responsive">
                <table className="table tr-history table-striped small">

                    <tbody>
                    {questionList}
                    </tbody>
                </table>
            </div>
            <Link to="/user/profile"><button className="btn btn-outline-secondary">
                <span><strong>Go back</strong></span>
            </button></Link>
        </div>
    )

};

export default UserQuestion;