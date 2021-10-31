import React from 'react';
import sidenavmanager from './sidenavmanager';

function managereport(){

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
  <center>
      <br/>
      <br/>
    <h1>Manage Reports</h1>
    <br/>
    <br/>
</center>

  <center>
    <table>
        <tr>
          <th>Parameter</th>
          <th>2018-2019(% increase)</th>
          <th>2019-2020(% increase)</th>
          <th>2020-2021(% increase)</th>
        </tr>
    <tr>
      <td>Residents</td>
      <td>23</td>
      <td>34</td>
      <td>26</td>
    </tr>
    <tr>
      <td>Services</td>
      <td>26</td>
      <td>37</td>
      <td>21</td>
    </tr>
    <tr>
      <td>Visitors</td>
      <td>45</td>
      <td>57</td>
      <td>24</td>
    </tr>
  </table>
  
</center>
        

      </>
    );
}

export default managereport;