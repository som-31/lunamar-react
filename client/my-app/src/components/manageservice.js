import React from 'react';
import sidenavmanager from './sidenavmanager';

function manageresident(){

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
                  <li><button class='loginbtn' onclick="document.getElementById('login-form').style.display='block'" style="width:auto;">Login</button></li>
                  <li><a href='employee.html'>Employee</a></li>
              </ul>
          </nav>
      </div>
        <div>
            
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
    <div id='login-form'class='login-page'>
      <div class="form-box">
          <div class='button-box'>
               <div id='btn'></div>
            
          </div>
       
   <div class="login-registering">
      <center>
          <h1>Manage Services</h1>
      </center>
   </div>
<form id='register' class='input-group-register'>
   <input type='text'class='input-field'placeholder='Name' required> </input>
   <br/>
   <br/>
   <textarea name="description" 
   placeholder="Service Description" 
   id="description" rows="5" cols="39" required>
   </textarea>
              <button type='submit'class='submit-btn'>Submit</button>
     </form>
      </div>
  </div>
    <center>
<table>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Actions</th>
    </tr>
    <tr>
      <td>Light</td>
      <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Electricity</td>
      <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Water</td>
      <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
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

export default manageresident;