import React from 'react';
import sidenavmanager from './Sidenavmanager';

function ManageVisitor(){

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

      <div class="form-box" style="height: 760px;">
          <div class='button-box'>
               <div id='btn'></div>
          </div>
   <div class="login-registering">
      <center><h1>Manage Visitors</h1>
      </center>
   </div>
<form id='register' class='input-group-register'>
    <input type='text'class='input-field'placeholder='First Name' required></input>
    <input type='text'class='input-field'placeholder='Last Name' required></input>
    <input type='text'class='input-field'placeholder='Visiting Apartment Id' required></input>
    <label for="">Approval</label>
    <select name="approval" id="approval"><option value="">Select</option><option value="">Yes</option><option value="">No</option>
    </select>
 <input type='text'class='input-field'placeholder='Address' required></input>
 <input type='text'class='input-field'placeholder='State' required></input>
 <input type='text'class='input-field'placeholder='City' required></input>
 <label for="">Entry At</label>
    <input type='time'class='input-field'placeholder='Entry At'required></input>
    <label for="">Exit At</label>
    <input type='time'class='input-field'placeholder='Exit At'required></input>
    <input type='number'class='input-field'placeholder='Phone' required></input>
    <input type="number" class='input-field' placeholder='Zip Code' required></input><button type='submit'class='submit-btn'>Submit</button>
     </form></div>
  <center>
    <table>
        <tr>
          <th>Visitor</th>
          <th>Vising Apartment Id</th>
          <th>Entry At</th>
          <th>Exit At</th>
          <th>Approval</th>
          <th>Actions</th>
        </tr>
    <tr>
      <td>Michael Kors</td>
      <td>12</td>
      <td>7:30 AM</td>
      <td>11:20 PM</td>
      <td>Yes</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Rohit padwal</td>
      <td>13</td>
      <td>8:30 AM</td>
      <td>11:20 PM</td>
      <td>Yes</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>14</td>
      <td>05:00 PM</td>
      <td>9:00 PM</td>
      <td>No</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>15</td>
      <td>09:00 AM</td>
      <td>4:00 PM</td>
   <td>Yes</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Sayali Deshmukh</td>
      <td>16</td>
      <td>7:30 AM</td>
      <td>12:00 PM</td>
      <td>Yes</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
    </td>
    </tr>
    <tr>
      <td>Somnath Jadhav</td>
      <td>17</td>
      <td>09:00 AM</td>
      <td>1:00 PM</td>
      <td>Yes</td>
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

export default ManageVisitor;