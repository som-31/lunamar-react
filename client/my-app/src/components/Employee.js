import React from 'react';
import Something from './manager/Something';


function something(){
    alert('in here');
    return (<Something />);
}

function Employee(){

    return(
        <>
            <div style={{"text-align":"center", color: "brown"}}>
            <h1> Choose your catergory </h1>  
            </div>
            <div id='service-form' class='service-page'>
                <div class="service-sub-block">
                    {/* <div class="service-sub-block-header"><a href='manager.html' onClick="something()">Manager</a></div> */}
                    <div class="service-sub-block-header"><button onClick={something}>Manager</button></div>
                </div>
            </div>
            <div id='service-form' class='service-page'>
                <div class="service-sub-block">
                    <div class="service-sub-block-header"><a href='admin.html'>Super Admin</a></div>
                </div>
            </div>
        </>
    );
}

export default Employee;