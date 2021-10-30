import React from 'react';

function ContactUs(){

    return(
        <>
            <div class="container">
                    <div class="contact-box">
                        <div class="left"></div>
                        <div class="right">
                            <center><h2>Contact Us</h2></center>
                            <form action="" id="register" method="post">
                                <input type="text" class="field" id="name" placeholder="Your Name" />
                                <input type="text" class="field" id="email" placeholder="Your Email" />
                                <input type="text" class="field" placeholder="Phone" />
                                <textarea placeholder="Query" id="query" class="field"></textarea>
                                <input type="button" value="Submit" onclick="sendEmail()" class="submit-btn" />
                            </form>
                        </div>
                    </div>
                </div>
        </>
    );

}


export default ContactUs;