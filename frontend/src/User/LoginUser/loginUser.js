import React from 'react';
import {useHistory} from "react-router-dom";

const LoginUser = (props) => {
    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();

        const login = {
            "name": e.target.name.value,
            "password": e.target.password.value
        };
        console.log("User being logged in-> ", login);

        props.loginUser(login).then(item => {
            console.log("This is the item", item);
            history.push("/users")
        }).catch(() => {
            return alert("Incorrect username or password")
        })
        // const logged = props.loginUser(login);
        //   console.log("This object is",logged)
        //   if(logged){
        //       history.push("/users")
        //   }
        //   else{
        //       return alert("Gabim")
        //   }

        //
    };


    return (
        <div>
            <div>
                <header className="login-form"><h2>Login form</h2></header>
            </div>
            <div className="login-card" style={{"fontFamily": "Roboto, sans-serif"}}>
                <p className="profile-name-card">
                    <i className="fa fa-unlock-alt " style={{
                        "width": "0",
                        "height": "0",
                        "fontSize": "56px",
                        "color": "rgb(104,145,162)"
                    }}></i>
                </p>
                <div className="row ">
                    <div className="col-6 offset-3">
                        <form className="form-group " onSubmit={onFormSubmit}><span className="reauth-email"
                                                                                    style={{"margin": "11px"}}></span>
                            <input className="form-control " type="text" id="inputEmail" required placeholder="Username"
                                   name={"name"}/>
                            <input className="form-control mb-2" type="password" id="inputPassword" required
                                   placeholder="Password" name={"password"}/>
                            <button className="btn btn-primary "
                                // style={{"fontFamily":"Roboto, sans-serif" ,"fontSize":"16px" ,"fontWeight":"normal", "fontStyle":"normal"}}
                                    type="submit">Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )


};
export default LoginUser;