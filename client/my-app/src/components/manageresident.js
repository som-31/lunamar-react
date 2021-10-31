import React from 'react';
import sidenavmanager from './Sidenavmanager';

function ManageResident(){

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
      <center>
          <h1>Manage Resident</h1>
      </center>
   </div>

<center>
    <table>
        <tr>
          <th>Resident Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Date of Birth</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Alfreds@lunamar.com</td>
          <td>6823442324</td>
          <td>01/01/1990</td>
          <td>Female</td>
          <td>
            <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
          <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
        </td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Centro@lunamar.com</td>
          <td>6823442324</td>
          <td>01/01/1990</td>
          <td>Female</td>
          <td>
            <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
          <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
        </td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Ernst@lunamar.com</td>
          <td>6823442324</td>
          <td>01/01/1990</td>
          <td>Female</td>
          <td>
            <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
          <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
        </td>
        </tr>
      </table>
    </center>
        

      </>
    );
}

export default ManageResident;