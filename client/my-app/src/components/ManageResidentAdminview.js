import React from 'react';
import { Link } from 'react-router-dom';

function ManageResidentAdminview(){

    return(
        <>
  
  <div class="sidebar">
   <Link to="/manage-reports-admin">Manage Reports</Link>
        <Link to="/manage-manager">Manage Manager</Link>

            <Link to="/manage-building-admin">Manage Building</Link>
            <Link to='/manage-resident-admin'>Manage Resident</Link>
            <Link to='/manage-apartment-admin'>Manage Apartment</Link>
            <Link to='/manage-service-admin'>Manage Service</Link>
            <Link to='/manage-visitor-admin'>Manage Visitor</Link>
            <Link to='/manage-amenities-admin'>Manage Amenities</Link>
            <Link to='/chat-admin'>Chat</Link>
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
            <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
          <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
        </td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Centro@lunamar.com</td>
          <td>6823442324</td>
          <td>01/01/1990</td>
          <td>Female</td>
          <td>
            <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
          <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
        </td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Ernst@lunamar.com</td>
          <td>6823442324</td>
          <td>01/01/1990</td>
          <td>Female</td>
          <td>
            <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
          <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
        </td>
        </tr>
      </table>
    </center>
        

      </>
    );
}

export default ManageResidentAdminview;