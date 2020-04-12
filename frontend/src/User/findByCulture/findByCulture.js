import React from "react";
import {Link,useParams,useHistory} from "react-router-dom";
import axios from "../../custom-axios/axios";


  const FindCulture = (props) => {

    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();

        if(e.target.culture.value == ""){
            return alert("Please fill in the culture you're looking for.")
        }
        const culture = {
            "culture" : e.target.culture.value,
        };
        console.log(culture);
        props.findCulture(culture).then((item)=>{
            console.log("Successful!",item);
            history.push("/users/culture");
        }).catch( () =>{
            console.log("Incorrect culture input , or could not be found");
        })



    };


    return(

        <form className="custom-form" onSubmit={onFormSubmit} >
            <h1>Which culture are you interested in?</h1>
            <div className="form-row form-group">
                <div className="col-sm-4 label-column"><label className="col-form-label"
                                                              htmlFor="culture-input-field">Culture Name </label></div>
                <div className="col-sm-6 input-column">
                    <input className="form-control" type="text"  placeholder="Culture" name={"culture"}/></div>
                <button className="btn btn-light submit-button" type="submit">Find the culture!</button>
            </div>
        </form>

    )
}

export default FindCulture;