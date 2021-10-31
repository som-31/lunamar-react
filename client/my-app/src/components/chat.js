import React from 'react';
import sidenavmanager from './sidenavmanager';

function Chat(){
   
    function openForm() {
      document.getElementById("myForm").style.display = "block";
    }
    
    function closeForm() {
      document.getElementById("myForm").style.display = "none";
    }
    
    return(
        <>
   

    <div class="sidebar">
        <a href="visit-apartment-visitor.html">Visit Apartment</a>
        <a href='visit-garden-visitor.html'>Visit Garden</a>
        <a href='chat-visitor.html'>Chat</a>

    </div>
    <div>
        <h1 style="text-align:center;">
            Welcome, Visitor
        </h1>

        <button class="open-button" onclick="openForm()">Chat</button>

        <div class="chat-popup" id="myForm">
          <form  class="form-container">
            <h1>Chat</h1>
        
            <label for="msg"><b>Message</b></label>
            <textarea placeholder="Type message.." name="msg" required></textarea>
        
            <button type="submit" class="btn">Send</button>
            <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
          </form>
        </div>
        
       
    </div>
        

      </>
    );
}

export default Chat;