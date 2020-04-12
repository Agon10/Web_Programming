import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const AskQuestion = (props) => {
    const [question, setQuestion] = useState({});
    const {userID} = useParams();
    console.log("User being called through Ask Question->", userID);
    console.log("User asking->", props.ask.name);

    const onFormSubmit = (e)=>{
        e.preventDefault();

        if(e.target.question.value === "")
        {
            return alert("Fill out your question please");
        }
        const user = {
            "user_id1": props.ask.name,
            "user_id2": userID,
            "message" : e.target.question.value
        };

        props.sendMessage(user);

    };

    return (
        <form className="custom-form" onSubmit={onFormSubmit}>
        <div>

                <h3>Ask your question down below!</h3>
                <textarea rows={4} cols={20} name={"question"}>

            </textarea>


        </div>
            <button className="btn btn-light submit-button" type="submit">Submit Question!</button>
            <Link to={"/users/culture/" + userID}>
                <button className="btn btn-outline-dark">
                    Go back!
                </button>
            </Link>
        </form>
    )

};

export default AskQuestion;
