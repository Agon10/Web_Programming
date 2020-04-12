import React from 'react';
import { Link , useHistory } from "react-router-dom";

const RegisterUser = (props) => {
    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();

        if(e.target.userName.value == "" || e.target.passWord.value == "" || e.target.culture.value == "" || e.target.cultureDescription.value == ""
        || e.target.languages.value == ""){
            return alert("You must not leave any of the fields blank")
        }
        const user = {
            "name" : e.target.userName.value,
            "password" : e.target.passWord.value,
            "culture" : e.target.culture.value,
            "culture_description" : e.target.cultureDescription.value,
            "languages" : e.target.languages.value

        };
        console.log(user);
        props.addUser(user);
        history.push("/login");

    };

    const handleReset = (e) =>
    {
        e.target.userName.value = "";
        e.target.passWord.value = "";
        e.target.culture.value = "";
        e.target.cultureDescription.value = "";
        e.target.languages.value="";
    }




    return(

        <div className="row register-form">

            <div className="col-md-8 offset-md-2">
                <form className="custom-form" onSubmit={onFormSubmit} onReset={handleReset}>
                    <h1>Register Form</h1>
                    <div className="form-row form-group">
                        <div className="col-sm-4 label-column"><label className="col-form-label"
                                                                      htmlFor="name-input-field">UserName </label></div>
                        <div className="col-sm-6 input-column">
                            <input className="form-control" type="text"  placeholder="Username" name={"userName"}/></div>
                    </div>

                    <div className="form-row form-group">
                        <div className="col-sm-4 label-column"><label className="col-form-label"
                                                                      htmlFor="pawssword-input-field">Password </label>
                        </div>
                        <div className="col-sm-6 input-column">
                            <input className="form-control" type="password"  placeholder="Password" name={"passWord"}/></div>
                    </div>

                    <div className="form-row form-group">
                        <div className="col-sm-4 label-column"><label className="col-form-label"
                                                                      htmlFor="languages-input-field">Languages </label></div>
                        <div className="col-sm-6 input-column">
                            <input className="form-control" type="text"  placeholder="Separate by coma ex lang1,lang2" name={"languages"}/></div>
                    </div>

                    <div className="form-row form-group">
                        <div className="col-sm-4 label-column"><label className="col-form-label"
                                                                      htmlFor="culture-input-field">Culture </label>
                        </div>
                        <div className="col-sm-6 input-column">
                            <input className="form-control" type="text"  placeholder="Culture" name={"culture"}/></div>
                    </div>

                    <div className="form-row form-group">
                        <div className="col-sm-4 label-column">
                            <label className="col-form-label"
                                   htmlFor="culture-desc-input-field"

                            >Culture Description </label></div>
                        <div className="col-sm-6 input-column">
                             <textarea rows={6} cols={47} name={"cultureDescription"}/>
                            </div>
                    </div>

                    <div className="form-check"><input className="form-check-input" type="checkbox"
                                                       id="formCheck-2"/><label className="form-check-label"
                                                                                htmlFor="formCheck-2">I&#39;ve read and
                        accept the terms and conditions</label></div>
                    <button className="btn btn-light submit-button" type="submit">Submit Form</button>
                </form>
            </div>
        </div>
    )
};
export default RegisterUser;