import React from 'react';
import Manager from './manager/Manager';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
    useRouteMatch,
  } from "react-router-dom";

function Employee(){
  
    return(
        <>
        <div style={{"textAlign":"center", color: "brown"}}>
         <h1> Choose your catergory </h1>  
        </div>
            <div id='service-form' class='service-page'>
                <div class="service-sub-block">
                    <div class="service-sub-block-header">
                        
                    <Link to="/manager">Manager</Link>
       
                        
                        
                    </div>
                </div>
            </div>
            <div id='service-form' class='service-page'>
                <div class="service-sub-block">
                    <div class="service-sub-block-header"><a href='admin.html'>Super Admin</a></div>
                </div>
            </div>
            <div>
            </div>
          
        </>
    );
}

export default Employee;