import React from 'react';
import sidenavmanager from './sidenavmanager';

function manageapartment(){

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
    
  <a href='enabled-services-resident.html'>Manage Service</a>
  <a href='manage-visitor-residentview.html'>Manage Visitor</a>
  <a href='upload-pic-video-resident.html'>Upload picture and Video </a>

  <a href='chat-resident.html'>Chat</a>

</div>
    <div id='login-form'class='login-page'>
      <div class="form-box" style="height: 480px;">
          <div class='button-box'>
               <div id='btn'></div>
            
          </div>
         
   <div class="login-registering">
      <center>
          <h1>Enable Services</h1>
      </center>
   </div>
<br/>
<br/>
   <form id='register' class='input-group-register'>
    <label for="">buildings</label>
    <select name="" name="">
        <option selected value="">Gold Star</option>
        <option value="">Creekside</option>
        <option value="">RealBond Realty</option>
        <option value="">Merril Willow</option>
       
    </select> 
    <br/>
    <br/>
    <br/>
    <label for="">Apartment Id</label>
    <select name="" id="">
        <option selected value="">01</option>
        <option value="">02</option>
        <option value="">03</option>
       
    </select> 
    <br/>
    <br/>
    <label for="">Update Services</label>
    <select name="" id="" multiple>
        <option value="">Gas</option>
        <option value="">Wifi</option>
        <option value="" selected>Electricity</option>
        <option value="" selected>Water</option>
       
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
          <th>Apartment Id</th>
          <th>Building Name</th>
          <th>Registered Services</th>
          <th>Actions</th>
         </tr>
    <tr>
      <td>01</td>
      <td>Creekside</td>
      <td>Water</td>
      <td>
       
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td>02</td>
        <td>RealBond Realty</td>
      <td>gas</td>
      <td>
     
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td>03</td>
        <td>Merril Willow</td>
      <td>Electricity</td>
      <td>
     
       
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td>04</td>
        <td>RealBond Realty</td>
      <td>Water</td>
      <td>
      
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td>05</td>
        <td>Creekside</td>
        <td>Water</td>
        <td>
        
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
        <td>06</td>
        <td>Merril Willow</td>
        <td>Gas</td>
        <td>
       
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
  </table>
</center>
        

      </>
    );
}

export default manageapartment;