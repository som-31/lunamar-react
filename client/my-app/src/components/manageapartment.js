import React from 'react';
import sidenavmanager from './Sidenavmanager';

function ManageApartment(){

    return(
        <>
  
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

export default ManageApartment;