import React from 'react';
import ManagerSideNav from './ManagerSideNav';

function Manager(){

    return(
        <>

    {/* <div class="sidebar">
        <a href="manage-building-managerview.html">Manage Building</a>
        <a href='manage-resident-managerview.html'>Manage Resident</a>
        <a href='manage-apartment-manager.html'>Manage Apartment</a>
        <a href='manage-service-managerview.html'>Manage Service</a>
        <a href='manage-visitor-managerview.html'>Manage Visitor</a>
        <a href='manage-amenities-managerview.html'>Manage Amenities</a>
        <a href='chat-manager.html'>Chat</a>

    </div> */}
    <ManagerSideNav />
    <div>
        <h1 style={{"text-align":"center"}}>
            Welcome
        </h1>
    </div>
        

      </>
    );
}

export default Manager;