import React, {Component} from 'react';
import './App.css';
import '../Header/header';
import Header from "../Header/header";
import Footer from "../Footer/footer";
import RegisterUser from "../User/RegisterUser/registerUser";
import LoginUser from "../User/LoginUser/loginUser";
import FindCulture from "../User/findByCulture/findByCulture";
import UserTable from "../User/UserTable/userTable";
import FollowSuccess from "../Following/following_success";
import AskQuestion from "../User/Question/askQuestion";
import Profile from "../User/profile/profile"
import UserQuestion from "../User/UserQuestions/userQuestion";
import UserFollowers from "../User/UserFollowers/userFollowers";
import UserReply from "../User/UserReply/UserReply";

import {BrowserRouter as Router, Route} from "react-router-dom";

import UserService from "../repository/axiosusersrepository";
import UserProfile from "../User/UserProfile/userProfile";

class App extends Component {


    constructor(props) {
        super();


        this.state = {
            users: [],
            login: '',
            usersbyCulture: [],

        }
    }

    loadUsers = () => {
        UserService.fetchAllUsers().then((data) => {
                this.setState({
                    users: data.data,
                })
            }
        );
    }

    findCulture = (culture) => {

        return UserService.getCulture(culture).then((data) => {
            this.setState((prevState) => {

                const usersbyCulture = data.data;

                console.log("Users by culture-> ", usersbyCulture)

                return {
                    "usersbyCulture": usersbyCulture
                }

            });
            return  Promise.resolve(culture);
        });

    };
    loginUser = (user) => {
        return  UserService.loginUser(user).then((response) => {


            this.setState((prevState) => {
                console.log("Users logged in");
                console.log(prevState.login);

                console.log("User that is logging on");
                console.log(user);
                return {
                    "login": user
                }

            });
            return Promise.resolve(user);
        });

    };

    createUser = (user) => {
        UserService.addUser(user).then((response) => {
                this.setState((prevState) => {
                    console.log("Users before update");
                    console.log(prevState.users);

                    console.log("testing culture users", prevState.usersbyCulture)

                    console.log("User which is being added");
                    console.log(user);

                    const users = prevState.users.concat(user);


                    return {
                        "users": users
                    }
                })
            }
        )
    };

    sendMessage = (user) => {
         UserService.postMessage(user)//.then((response)=>{
        //     this.setState((prevState)=>{
        //         console.log("Messages being sent", user);
        //
        //         const messagelog = prevState.messages.concat(user);
        //
        //         return{
        //             "messages" : messagelog
        //         }
        //     })
        // })
    };

    // getUser = (user) => {
    //     UserService.getUser(user).then((response)=>{
    //         this.setState((prevState)=>{
    //
    //             const user = response.data;
    //
    //             return{
    //                 "user" : user
    //             }
    //         })
    //     })
    // };




    render() {
        const routing = (
            <div>
                <Router>
                    <Header loggedIn={this.state.login}/>


                    <Route path={"/login"} exact render={() => <LoginUser loginUser={this.loginUser}/>}/>
                    <Route path={"/register/"} exact render={() => <RegisterUser addUser={this.createUser}/>}/>
                    <Route path={"/users"} exact render={() => <FindCulture findCulture={this.findCulture}/>}/>
                    <Route path={"/user/profile"} exact render={() => <Profile user={this.state.login}/>}/>
                    <Route path={"/user/profile/followers/:userID"} exact render={()=> <UserFollowers/>}/>
                    <Route path={"/user/profile/questions/:userID"} exact render ={()=> <UserQuestion/>}/>
                    <Route path={"/user/profile/questions/reply/:userID"} exact render={() => <UserReply answer={this.state.login} sendMessage={this.sendMessage}/>}/>
                    <Route path={"/users/culture"} exact render={() =><UserTable  users={this.state.usersbyCulture}/> }/>
                    <Route path={"/users/culture/:userID"} exact render={() => <UserProfile user={this.state.login}/>}/>
                    <Route path={"/users/culture/followed/:userID"} exact render={() => <FollowSuccess follower={this.state.login}/>}/>
                    <Route path={"/users/culture/question/:userID"} exact render={()=> <AskQuestion ask={this.state.login} sendMessage={this.sendMessage}/>}/>


                </Router>
            </div>
        );
        return (
            <div className={"App"}>
                {routing}
            </div>
        );
    }

}

export default App;
