import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ManageBuilding from '../ManageBuilding';

function ManagerSideNav(){

    return(
        <>
        <Router>
        <div class="sidebar">
            <Link to="/manage-building">Manage Building</Link>
            <Link to='/manage-resident'>Manage Resident</Link>
            <Link to='/manage-apartment'>Manage Apartment</Link>
            <Link to='/manage-service'>Manage Service</Link>
            <Link to='/manage-visitor'>Manage Visitor</Link>
            <Link to='/manage-amenities'>Manage Amenities</Link>
            <Link to='/chat-manager'>Chat</Link>
        </div>
        <Switch>
            <Route exact path='/manage-building'><ManageBuilding /></Route>
            <Route exact path=''></Route>
            <Route exact path=''></Route>
            <Route exact path=''></Route>
            <Route exact path=''></Route>
            <Route exact path=''></Route>
            <Route exact path=''></Route>
        </Switch>
        </Router>
        
        </>
    );
}

export default ManagerSideNav;