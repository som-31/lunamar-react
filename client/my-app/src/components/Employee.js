import React from 'react';
import manager from './manager';
function Employee(){
    const managerRoute = manager();
    const handleOnClick = useCallback(() => history.push('/sample'), [managerRoute]);
  
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
            <div>
            <sidenavmanager/>
            </div>
          
        </>
    );
}

export default Employee;