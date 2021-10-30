import React from 'react';

function Employee(){

    return(
        <>
        <div style={{"text-align":"center", color: "brown"}}>
         <h1> Choose your catergory </h1>  
        </div>
            <div id='service-form' class='service-page'>
                <div class="service-sub-block">
                    <div class="service-sub-block-header"><a href='manager.html'>Manager</a></div>
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