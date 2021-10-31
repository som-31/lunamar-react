import React from 'react';
import sidenavmanager from './sidenavmanager';

function resident(){
    function sendEmail() {
        var toEmail = document.getElementById('email');
        var password = document.getElementById('password');
      Email.send({
        SecureToken : "e09cb61c-aaec-4ff7-bc86-39326d58e744",
        To : toEmail.value,
        From : "jadhav.deshmukh.padwal@gmail.com",
        Subject : "Login Credentials",
        Body : `<p>Please find the below credentials for login</p>
                <p>Username: ${toEmail.value}</p>
                <p>Password: ${password.value}</p>`
      }).then(function (message) {
          alert("mail sent successfully")
        })
    }

    <script src=
    "https://smtpjs.com/v3/smtp.js">
  </script>
  
    return(
        <>
     <div class="full-page">
        <div class="navbar">
            <div>
                        <img src="assets/images/Lunamar-logos.jpeg" alt="subdivision image" height="20%" width="30%"></img>

            </div>
            <nav>
                <ul id='MenuItems'>
                    <li><a href='home.html'>Home</a></li>
                    <li><a href='aboutus.html'>About Us</a></li>
                    <li><a href='services-information.html'>Services</a></li>
                    <li><a href='contact.html'>Contact</a></li>
                    <li><a href='login.html'>Login</a></li>
                    <li><a href='employee.html'>Employee</a></li>
                </ul>
            </nav>
        </div>
        <div id='login-form'class='login-page'>
            <div class="form-box" style="height: 680px;">
                <div class='button-box'>
                     <div id='btn'></div>
                </div>
         <div class="login-registering">
            <center>
                <h1>Register</h1>
            </center>
         </div>
		 <form id='register' class='input-group-register' method="POST">
		     <input type='text'class='input-field'placeholder='First Name' required></input>
		     <input type='text'class='input-field'placeholder='Last Name ' required></input>
		     <input type='email'class='input-field'placeholder='Email Id' id="email" required></input>
             <input type="text" class="input-field" placeholder="Phone" required></input>
             <br/>
             <br/>
             <p>Please enter your date of birth</p>
             <input type="date" class="input-field" placeholder="Date of Birth" required></input>
             <br/>
             <br/>
             <p>Please select your gender</p>
             <input type="radio" id="male" value="male">Male</input>
             <input type="radio" id="female" value="female">Female</input>
             <input type="radio" id="others" value="others">Others</input>
		     <input type='password'class='input-field'placeholder='Enter Password' required></input>
		     <input type='password'class='input-field'placeholder='Confirm Password' id="password" required></input>
		     <input type='checkbox'class='check-box'></input><span>I agree to the terms and conditions</span>
             <input type="button" value="Submit" onclick="sendEmail()" class="submit-btn"></input>
	         </form>
            </div>
        </div>
    </div>

        

      </>
    );
}

export default resident;