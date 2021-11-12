import React from 'react';
import { Link } from 'react-router-dom';

function VisitGarden(){

    return (
        <>
<div class="sidebar">

<Link to='/visit-apartment'>Visit Apartment</Link>
<Link to='/visit-garden'>Visit Garden</Link>
<Link to='/manage-incident'>Manage Incident</Link>

<Link to='/chat-visitor'>Chat</Link>
</div>
    <div id='login-form'class='login-page'>
      <div class="form-box" style="height: 700px;">
          <div class='button-box'>
               <div id='btn'></div>
             
          </div>
          
   <div class="login-registering">
      <center>
          <h1>Request Visit Garden</h1>
      </center>
   </div>
<form id='register' class='input-group-register'>
   
    <input type='text'class='input-field'placeholder='First Name' required> </input>
    <input type='text'class='input-field'placeholder='Last Name' required></input>
    <input type='text'class='input-field'placeholder='Visiting Garden Name' required></input>
    
   
    
 <input type='text'class='input-field'placeholder='Address' required></input>
 <input type='text'class='input-field'placeholder='State' required></input>
 <input type='text'class='input-field'placeholder='City' required></input>
 <label for="">Entry At</label>
    <input type='time'class='input-field'placeholder='Entry At' required></input>
    <label for="">Exit At</label>
    <input type='time'class='input-field'placeholder='Exit At' required></input>
    <input type='number'class='input-field'placeholder='Phone' required></input>
    <input type="number" class='input-field' placeholder='Zip Code' required></input>

              <button type='submit'class='submit-btn'>Submit</button>
     </form>
      </div>
  </div>
  <center>
    <table>
        <tr>
          <th>Visitor</th>
          <th>Visiting Garden Name</th>
          <th>Entry At</th>
          <th>Exit At</th>
          <th>Actions</th>
        </tr>
    <tr>
      <td>Michael Kors</td>
      <td>Earth Angels</td>
      <td>7:30 AM</td>
      <td>11:20 PM</td>
      
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Rohit padwal</td>
      <td>Flower Dome3</td>
      <td>8:30 AM</td>
      <td>11:20 PM</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>Green Solutions</td>
      <td>05:00 PM</td>
      <td>9:00 PM</td>
      
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>Arbor Gardening</td>
      <td>09:00 AM</td>
      <td>4:00 PM</td>
   
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Sayali Deshmukh</td>
      <td>Nature Sharp</td>
      <td>7:30 AM</td>
      <td>12:00 PM</td>
      
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Somnath Jadhav</td>
      <td>Nature Captured7</td>
      <td>09:00 AM</td>
      <td>1:00 PM</td>
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

export default VisitGarden;