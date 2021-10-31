import React from 'react';

function PhotoVideo(){

    return (
        <>



    <div class="sidebar">
    
        <a href='enabled-services-resident.html'>Manage Service</a>
        <a href='manage-visitor-residentview.html'>Manage Visitor</a>
        <a href='upload-pic-video-resident.html'>Upload picture and Video </a>

        <a href='chat-resident.html'>Chat</a>

    </div>

    <div>
        <form >
            <div>
              <label for="file">Choose file to upload</label>
              <input type="file" name="" id="" style="margin-left: 50%;"> </input>
            </div>
            <div>
              <button>Submit</button>
            </div>
           </form>
    </div>
        </>
    );
}

export default PhotoVideo;