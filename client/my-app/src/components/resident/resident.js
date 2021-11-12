import React from 'react';

function Resident(){

    return(
        <>
    
        
    <Link to='/manage-service-resident'>Manage Service</Link>
                    <Link to='/manage-visitor-resident'>Manage Visitor</Link>
                    <Link to='/photo-video'>Upload Photo/video</Link>

                    <Link to='/chat-resident'>Chat</Link>
    <div>
        <h1 style={{"text-align":"center"}}>
            Welcome
        </h1>
    </div>
        
        

      </>
    );
}

export default Resident;