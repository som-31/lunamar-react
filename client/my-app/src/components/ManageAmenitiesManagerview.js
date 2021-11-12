import React from 'react';
import { Link } from 'react-router-dom';

function ManageAmenitiesManagerview(){

    return(
        <>
  
  <div class="sidebar">
            <Link to="/manage-building-manager">Manage Building</Link>
            <Link to='/manage-resident-manager'>Manage Resident</Link>
            <Link to='/manage-apartment-manager'>Manage Apartment</Link>
            <Link to='/manage-service-manager'>Manage Service</Link>
            <Link to='/manage-visitor-manager'>Manage Visitor</Link>
            <Link to='/manage-amenities-manager'>Manage Amenities</Link>
            <Link to='/chat-manager'>Chat</Link>
        </div>        <div id='service-form' class='service-page'>
            <div class="service-sub-block">
                <div class="service-sub-block-header"><Link to='/manage-garden-manager'>Manage Garden</Link></div>
            </div>
        </div>
        <div id='service-form' class='service-page'>
            <div class="service-sub-block">
                <div class="service-sub-block-header"><Link to='/manage-pool-manager'>Manage Pool</Link></div>
            </div>
        </div>
        <div id='service-form' class='service-page'>
            <div class="service-sub-block">
                <div class="service-sub-block-header"><Link to='/manage-plant-manager'>Manage Plant</Link></div>
            </div>
        </div>
        

      </>
    );
}

export default ManageAmenitiesManagerview;