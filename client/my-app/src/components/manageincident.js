import React from 'react';
import sidenavmanager from './sidenavmanager';

function manageincident(){

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
    <div id='login-form'class='login-page'>
      <div class="form-box">
          <div class='button-box'>
               <div id='btn'></div>
            
          </div>
        
   <div class="login-registering">
      <center>
          <h1>Manage Incidentss</h1>
      </center>
   </div>
<form id='register' class='input-group-register'>
   
    <input type='text'class='input-field'placeholder='Incident Name' required></input>
    <input type='text'class='input-field'placeholder='Visitor Name' required></input>
    <br/>
    <br/>
    <textarea placeholder="Description" class="field" style="border: 1px solid black;"></textarea>
    <input type='text'class='input-field'placeholder='Visiting Apartment Id' required></input>
    <br/>
    <br/>
    <label for="">Select Visitor</label>
    <select name="" id="">
        <option value="">Sayali Deshmukh</option>
        <option value="">Somnath Jadhav</option>
        <option value="">Rohit Padwal</option>
        <option value="">Michael Kors</option>
        <option value="">Ernst Handel</option>
        <option value="">Island Trading</option>
    </select>
    <br/>
    <br/>
 
 

<div>
    <label for="">Incident At:</label>
    <input type="time" name="" id="" placeholder="incident_at" class="input-field">    </input>
</div>
    <button type='submit'class='submit-btn'>Submit</button>
     </form>
      </div>
  </div>
    
  <center>
    <table>
        <tr>
          <th>Incident Name</th>
          <th>Visitor Name</th>
          <th>Visiting Apartment Id</th>
          <th>Incident At</th>
          <th>Description</th>
            <th>Actions</th>
         </tr>
    <tr>
      <td>Verbal Abuse</td>
      <td>Sayali Deshmukh</td>
      
      <td>12</td>
      <td>11:20 PM</td>
      <td>fsdfsdfdsfffcfsfff</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td>Harrassment</td>
        <td>Somnath Jadhav</td>
        
        <td>13</td>
        <td>1:20 PM</td>
        <td>fsdfsdfdsfffcfsfff</td>
      
    
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td>murder</td>
        <td>Rohit Padwal</td>
      
        <td>13</td>
        <td>5:20 PM</td>
        <td>fsdfsdfdsfffcfsfff</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td>Roberry</td>
        <td>Michael Kors</td>
        
        <td>20</td>
        <td>6:00 AM</td>
        <td>fsdfsdfdsfffcfsfff</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Roberry</td>
      <td>Ernst Handel</td>
      
      <td>34</td>
      <td>6:30 PM</td>
      <td>fsdfsdfdsfffcfsfff</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td>Roberry</td>
        <td>Island Trading</td>
      
        <td>3</td>
        <td>10:00 PM</td>
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

export default manageincident;