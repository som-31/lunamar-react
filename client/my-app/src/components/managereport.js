import React from 'react';
import sidenavmanager from './Sidenavmanager';

function ManageReport(){

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

export default ManageReport;