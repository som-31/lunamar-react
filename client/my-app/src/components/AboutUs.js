import React from 'react';

function AboutUs(){
    return (
        <>
        
    {/* <div class="navbar">
        <div>
                    <img src="assets/images/Lunamar-logos.jpeg" alt="subdivision image" height="20%" width="30%" />

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
    </div> */}

	<div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
            
				<div class="content">
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
					<div class="social">
                        <a href="https://www.facebook.com/" target="_blank"><img src="assets/images/facebook.png" alt="facebook" width="30" height="30" /></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src="assets/images/instagram.png" alt="instagram" width="30" height="30" /></a>
                        <a href="https://twitter.com/" target="_blank"><img src="assets/images/twitter.png" alt="twitter" width="30" height="30" /></a>
                    </div>
				</div>
				
			</div>
			<div class="image-section">
                <img src="assets/images/Logo.png" alt="buildings image" />
			</div>
		</div>
	</div>

        </>
    );
}

export default AboutUs;