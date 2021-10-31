import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

function Login(){

    return (
        <>
        <BrowserRouter>
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
         <span>Want to be part of us. Then <Link to='/register' >Register</Link> here.</span>
            </div>
        </div>
        </BrowserRouter>
        </>
    );
}

export default Login;