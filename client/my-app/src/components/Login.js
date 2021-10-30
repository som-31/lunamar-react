import React from 'react';

function Login(){

    return (
        <>
        <div id='login-form' class='login-page'>
            <div class="form-box" style={{height: "470px"}}>
                <div class='button-box'>
                    <div id='btn'></div>
                </div>
                <div class="login-heading">
                   <center>
                       <h1>Login</h1>
                   </center>
                </div>
                <form id='login' class='input-group-login'>
                    <input type='text'class='input-field'placeholder='Email Id' required />
		    <input type='password'class='input-field'placeholder='Enter Password' required />
		    <input type='checkbox'class='check-box' /><span>Remember Password</span>
		    <button type='submit'class='submit-btn'>Log in</button>
		 </form>
         <span>Want to be part of us. Then <a href="register.html">Register</a> here.</span>
            </div>
        </div>
        </>
    );
}

export default Login;