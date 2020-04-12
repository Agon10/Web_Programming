import React from 'react';
import {Link} from  'react-router-dom'
import './header.css'

const header = (props) => {
    if (props.loggedIn === "") {
        return (
            <header>
                <nav className="navbar navbar-light navbar-expand-md">
                    <div className="container-fluid"><Link className="navbar-brand" to={"/"}>Welcome</Link>
                        <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span
                            className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item" role="presentation">
                                    <Link to="/login" className="nav-link">Login</Link></li>
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link" to="/register"> Register </Link></li>
                                <li className="nav-item" role="presentation"></li>
                            </ul>
                        </div>
                    </div>

                </nav>
                <div id="promo" className="shadow-lg">
                    <div className="jumbotron">
                        <h1>Culture wiki</h1>
                        <p>Welcome to the most diverse culture page </p>
                        <p></p>
                    </div>
                </div>
            </header>
        )
    }
    else
    {
        return (
            <header>
                <nav className="navbar navbar-light navbar-expand-md">
                    <div className="container-fluid"><Link className="navbar-brand" to={"/"}>Welcome</Link>
                        <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span
                            className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item" role="presentation">
                                    <Link to="/user/profile" className="nav-link">My Profile</Link></li>
                                <li className="nav-item" role="presentation">
                                    <Link to="/users" className="nav-link">Search</Link></li>


                            </ul>
                        </div>
                    </div>

                </nav>
                <div id="promo">
                    <div className="jumbotron">
                        <h1>Culture wiki</h1>
                        <p>Welcome to the most diverse culture page </p>
                        <p></p>
                    </div>
                </div>
            </header>
        )
    }
}

export default header;