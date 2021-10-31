import React from 'react';
import sidenavmanager from './sidenavmanager';

function manager(){

    return(
        <>
           <div class="navbar">
        <div>
                    <img src="assets/images/Lunamar-logos.jpeg" alt="subdivision image" height="20%" width="30%"> </img>

        </div>
        <nav>
            <ul id='MenuItems'>
                <li><a href='home.html'>Home</a></li>
                <li><a href='aboutus.html'>About Us</a></li>
                <li><a href='services-information.html'>Services</a></li>
                <li><a href='contact.html'>Contact</a></li>
                <li><a href='login.html'>Login</a></li>
                <li><a href='employee.html'>Employee</a></li>

            </ul>
        </nav>
    </div>


    <div class="sidebar">
        <a href="manage-building-managerview.html">Manage Building</a>
        <a href='manage-resident-managerview.html'>Manage Resident</a>
        <a href='manage-apartment-manager.html'>Manage Apartment</a>
        <a href='manage-service-managerview.html'>Manage Service</a>
        <a href='manage-visitor-managerview.html'>Manage Visitor</a>
        <a href='manage-amenities-managerview.html'>Manage Amenities</a>
        <a href='chat-manager.html'>Chat</a>

    </div>

    <div>
        <h1 style="text-align:center;">
            Welcome, {{Manager}}
        </h1>
    </div>
        

      </>
    );
}

export default manager;