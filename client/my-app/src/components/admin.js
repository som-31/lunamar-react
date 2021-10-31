import React from 'react';
import sidenavmanager from './sidenavmanager';

function Admin(){

    return(
        <>
    

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

export default Admin;