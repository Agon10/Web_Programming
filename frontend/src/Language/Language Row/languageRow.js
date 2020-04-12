import React,{useEffect,useState} from 'react';
import {Link,useParams,useHistory} from "react-router-dom";
import axios from "../../custom-axios/axios";


const LanuageRow = (props) =>{

    return (
       <div>
           <ul>
               {props.languages.map((item, key) => {
                   console.log(item)
                   return <li>{item.name}</li>
               })}
           </ul>
       </div>
    );
}

export default  LanuageRow;