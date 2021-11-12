import React from 'react';
import { Link } from 'react-router-dom';

function ManageAmenitiesAdminview(){

    return(
        <>
  
  <div class="sidebar">
   <Link to="/manage-reports-admin">Manage Reports</Link>
        <Link to="/manage-manager">Manage Manager</Link>

            <Link to="/manage-building-admin">Manage Building</Link>
            <Link to='/manage-resident-admin'>Manage Resident</Link>
            <Link to='/manage-apartment-admin'>Manage Apartment</Link>
            <Link to='/manage-service-admin'>Manage Service</Link>
            <Link to='/manage-visitor-admin'>Manage Visitor</Link>
            <Link to='/manage-amenities-admin'>Manage Amenities</Link>
            <Link to='/chat-admin'>Chat</Link>
    </div>
        <div id='service-form' class='service-page'>
            <div class="service-sub-block">
                <div class="service-sub-block-header"><Link to='/manage-garden-admin'>Manage Garden</Link></div>
            </div>
        </div>
        <div id='service-form' class='service-page'>
            <div class="service-sub-block">
                <div class="service-sub-block-header"><Link to='/manage-pool-admin'>Manage Pool</Link></div>
            </div>
        </div>
        <div id='service-form' class='service-page'>
            <div class="service-sub-block">
                <div class="service-sub-block-header"><Link to='/manage-plant-admin'>Manage Plant</Link></div>
            </div>
        </div>
        

      </>
    );
}

export default ManageAmenitiesAdminview;