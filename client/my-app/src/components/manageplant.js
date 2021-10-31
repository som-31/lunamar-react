import React from 'react';
import sidenavmanager from './sidenavmanager';

function manageplant(){

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
          <h1>Manage Plants</h1>
      </center>
   </div>
<form id='register' class='input-group-register'>
   
    <input type='text'class='input-field'placeholder='Plant Type' required></input>
   
    
    <br/>
    <br/>
    
   <input type='text'class='input-field'placeholder='Plant Name' required> </input>
    <br/>
    <br/>
    <textarea placeholder="Plant Description" class="field" style="border: 1px solid black;"></textarea>
    <br/>
    <br/>
    <label for="">Select Garden</label>
    <select name="" id="">
        <option value="">Earth Angels</option>
        <option value="">Flower Dome</option>
        <option value="">Green Solutions</option>
        <option value="">Arbor Gardening</option>
        <option value="">Nature Sharp</option>
        <option value="">Nature Captured</option>
    </select>
    <br/>
    <br/>



 
 


    <button type='submit'class='submit-btn'>Submit</button>
     </form>
      </div>
  </div>
    
  <center>
    <table>
        <tr>
          <th>Plant Type</th>
          <th>Plant Name</th>
          <th>Description</th>
            <th>Actions</th>
         </tr>
    <tr>
      <td>Flowering</td>
      <td>Agapanthus</td>
      <td>fsdfsdfdsfffcfsfff</td>
    <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td>Non Flowering</td>
      <td>club mosses</td>
      <td>fsdfsdfdsfffcfsfff</td>
      
    
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td>Non Flowering</td>
      <td>hornworts</td>
      <td>fsdfsdfdsfffcfsfff</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td>Non Flowering</td>
      <td>Aliverworts</td>
      <td>fsdfsdfdsfffcfsfff</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Flowering</td>
      <td>Tulip</td>
      <td>fsdfsdfdsfffcfsfff</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td>Flowering</td>
      <td>Lily</td>
      <td>fsdfsdfdsfffcfsfff</td>
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

export default manageplant;