import React from 'react';
import sidenavmanager from './sidenavmanager';

function admin(){

    return(
        <>
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
        <a href="manage-reports.html">Reports</a>
        <a href="manage-manager.html">Manage Manager</a>
        <a href="manage-building-adminview.html">Manage Building</a>
        <a href="manage-apartment-adminview.html">Manage Apartment</a>
        <a href='manage-resident-adminview.html'>Manage Resident</a>
        <a href='manage-service-adminview.html'>Manage Service</a>
        <a href='manage-visitor-admintview.html'>Manage Visitor</a>
        <a href='manage-amenities-adminview.html'>Manage Amenities</a>
        <a href='chat-admin.html'>Chat</a>
    </div>

    <div>
        <h1 style="text-align:center;">
            Welcome, {{Manager }}
        </h1>
    </div>

        

      </>
    );
}

export default admin;