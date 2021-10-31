import React from 'react';
import sidenavmanager from './sidenavmanager';

function visitor(){

    return(
        <>
    <div class="full-page">
        <div class="navbar">
            <div>
                        <img src="assets/images/Lunamar-logos.jpeg" alt="subdivision image" height="20%" width="30%"> </img>

            </div>
            <nav>
                <ul id='MenuItems'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='services-information.html'>Services</a></li>
                    <li><a href='contact.html'>Contact</a></li>
                    <li><button class='loginbtn' onclick="document.getElementById('login-form').style.display='block'"
                            style="width:auto;">Login</button></li>
                    <li><a href='employee.html'>Employee</a></li>
                </ul>
            </nav>
        </div>
    

        <div class="sidebar">
            <a href="visit-apartment-visitor.html">Visit Apartment</a>
            <a href='visit-garden-visitor.html'>Visit Garden</a>
            <a href='chat-visitor.html'>Chat</a>
    
        </div>
    </div>
        

      </>
    );
}

export default visitor;