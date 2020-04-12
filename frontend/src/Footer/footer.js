import React from 'react';
import {Link} from  'react-router-dom'


const Footer = () =>{

    return (
        <footer id="footer">

            <div style= {{"background": "black" ,"text-align": "center", "margin": "0px", "padding":"10px"}}>
                <p style= {{"color":"grey", "font-family": "raleway"}}>Copyright (c) 2017 HM-hub.co.in</p>
            </div>
        </footer>
    )
}

export  default Footer;