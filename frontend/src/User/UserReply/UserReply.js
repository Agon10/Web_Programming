import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const UserReply = (props) => {
    const [reply, setReply] = useState({});
    const {userID} = useParams();
    console.log("User being called through Reply->", userID);
    console.log("User asking->", props.answer.name);

    const onFormSubmit = (e)=>{
        e.preventDefault();

        if(e.target.question.value === "")
        {
            return alert("Fill out your reply please");
        }
        const user = {
            "user_id1": props.answer.name,
            "user_id2": userID,
            "message" : e.target.question.value
        };

        props.sendMessage(user);

    };

    return (
        <form className="custom-form" onSubmit={onFormSubmit}>
            <div>

                <h3>Reply!</h3>
                <textarea rows={4} cols={20} name={"question"}>

            </textarea>


            </div>
            <button className="btn btn-light submit-button" type="submit">Submit Reply!</button>
        </form>
    )

};

export default UserReply;
