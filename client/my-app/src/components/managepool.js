import React from 'react';
import sidenavmanager from './sidenavmanager';

function managepool(){

    return(
        <>
  <div class="navbar">
    <div>
              <img src="assets/images/Lunamar-logos.jpeg" alt="subdivision image" height="20%" width="30%"></img>

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
  <a href="manage-manager.html">Manage Manager</a>
  <a href="manage-building-adminview.html">Manage Building</a>
  <a href="manage-apartment-adminview.html">Manage Apartment</a>

  <a href='manage-resident-adminview.html'>Manage Resident</a>
  <a href='manage-service-adminview.html'>Manage Service</a>
  <a href='manage-visitor-admintview.html'>Manage Visitor</a>
  <a href='manage-amenities-adminview.html'>Manage Amenities</a>
  <a href='chat-admin.html'>Chat</a>

</div>
    <div id='login-form'class='login-page'>
      <div class="form-box">
          <div class='button-box'>
               <div id='btn'></div>
            
          </div>
         
   <div class="login-registering">
      <center>
          <h1>Manage Pools</h1>
      </center>
   </div>
<form id='register' class='input-group-register'>
    <br/>
    <input type="number" class='input-field' placeholder='Pool Id' required> </input>
<br/>
<br/>
<label for="subdivision">Select Subdivision</label>
    <select name="subdivision" id="subdivision">
        <option value="">Select</option>
        <option value="">Lunamar</option>
        <option value="">Supertech</option>
        <option value="">Gaur</option>
    </select>
    <br/>
    <br/>
    <p>Opening Hours</p>
    <input type="time" class='input-field' required name="" id="opening_hours"></input>
    <br/>
    <label for="closing_hours">Closing Hours</label>
    <input type="time" class='input-field' required name="" id="closing_hours"></input>
    <br/>
    <p>Last Inspection At</p>
    <input type="date" class='input-field' required name="" id="Last Inspection At"></input>
    <br/>
    <label for="Next_Ispection">Next Inspection At</label>
    <input type="date" class='input-field' required name="" id="Next Inspection At"></input>
    <br/>
     <button type='submit'class='submit-btn'>Submit</button>
     </form>
      </div>
  </div>
    <center>
<table>
    <tr>
      <th>Pool Id</th>
      <th>Subdivision Name</th>
      <th>Opening Hours</th>
      <th>Closing Hours</th>
      <th>Last Inspection At </th>
      <th>Next Inspection At</th>
       <th>Actions</th>
    </tr>
    <tr>
        <td>01</td>
      <td>Lunamar</td>
      <td>5:00 AM</td>
      <td>11:00 PM</td>
     <td>01/10/2021</td>
     <td>10/10/2021</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td> 02</td>
        <td>Lunamar</td>
        <td>9:00 AM</td>
        <td>12:00 PM</td>
       <td>02/10/2021</td>
       <td>12/10/2021</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td> 03</td>
        <td>Lunamar</td>
        <td>6:00 AM</td>
        <td>9:00 AM</td>
       <td>03/10/2021</td>
       <td>13/10/2021</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td> 04</td>
        <td>Lunamar</td>
        <td>5:30 AM</td>
        <td>1:00 PM</td>
       <td>04/10/2021</td>
       <td>14/10/2021</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td> 05</td>
        <td>Lunamar</td>
        <td>4:00 AM</td>
        <td>11:00 AM</td>
       <td>05/10/2021</td>
       <td>15/10/2021</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
       <td> 06</td>
        <td>Lunamar</td>
        <td>6:00 AM</td>
        <td>11:00 PM</td>
       <td>06/10/2021</td>
       <td>16/10/2021</td>
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

export default managepool;