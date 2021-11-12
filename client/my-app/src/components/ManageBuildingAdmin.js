import React from 'react';
import { Link } from 'react-router-dom';

function ManageBuildingAdmin(){

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
    <div id='login-form'class='login-page'>
      <div class="form-box">
          <div class='button-box'>
               <div id='btn'></div>
              
          </div>
          
   <div class="login-registering">
      <center>
          <h1>Manage Buildings</h1>
         
      </center>
   </div>
<form id='register' class='input-group-register'>
   <input type='text'class='input-field'placeholder='Name' required> </input>
   <input type="number" class='input-field' placeholder='Floors' required></input>
   <input type='number'class='input-field'placeholder='Total Apartments' required></input>
   <input type="number" class="input-field" placeholder="Occupancy" required></input>
              <button type='submit'class='submit-btn'>Submit</button>
     </form>
      </div>
  </div>
    <center>
<table>
    <tr>
      <th>Name</th>
      <th>Floors</th>
      <th>Total Apartments</th>
      <th>Actions</th>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>23</td>
      <td>23</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>43</td>
      <td>64</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>53</td>
      <td>344</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>45</td>
      <td>466</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Laughing Bacchus Winecellars</td>
      <td>54</td>
      <td>466</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>53</td>
      <td>465</td>
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

export default ManageBuildingAdmin;