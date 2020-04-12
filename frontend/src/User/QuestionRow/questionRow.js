import React, {useEffect, useState} from "react";
import {Link,useParams} from "react-router-dom";
import axios from "../../custom-axios/axios"

const QuestionRow = (props)=>{
    return(
        <div>
            <tr className="text-capitalize">
                <td scope="col">Message: {props.content}</td>
                <td scope="col">Sender: {props.user}</td>
                <td scope="col">
                    <Link to={"/user/profile/questions/reply/"+props.user}> <button className="btn btn-sm btn-secondary">
                        <span className="fa fa-edit"/>
                        <span><strong>Reply</strong></span>
                    </button></Link>

                </td>
            </tr>
        </div>
    )
};

export default QuestionRow;