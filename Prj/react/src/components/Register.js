import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

<script src=
"https://smtpjs.com/v3/smtp.js">
</script>


class Register extends React.Component {
    
    API_PATH = 'http://localhost/projects/lunamar-react/server/register.php'

    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            dob: '',
            gender: '',
            password: '',
            confirmPassword: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        console.log('in Submit function');
        console.log(this.state);
        axios({
         method: 'post',
         url: this.API_PATH,
         headers: {
             'content-type': 'application/json'
         },
         data: this.state
     })
     .then(result => {
         console.log(result.data)
         this.setState({
             dataSent: result.data.sent,
         })
         console.log(this.state)
     })
     .catch(error => this.setState({
         error: error.message
     }));
     }

    render(){
        
        return(
            <>
     <div className="full-page">
        <div id='login-form'className='login-page'>
            <div className="form-box" style={{height: "680px"}}>
                <div className='button-box'>
                     <div id='btn'></div>
                </div>
         <div className="login-registering">
            <center>
                <h1>Register</h1>
            </center>
         </div>
		 <form id='register' className='input-group-register' method="post">
		     <input type='text'className='input-field'placeholder='First Name' required
             value={this.state.firstname} onChange={e => this.setState({ firstname: e.target.value })} />
		     
             <input type='text'className='input-field'placeholder='Last Name ' required 
             value={this.state.lastname} onChange={e => this.setState({ lastname: e.target.value })}/>
		     
             <input type='email'className='input-field'placeholder='Email Id' id="email" required 
              value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
             
             <input type="text" className="input-field" placeholder="Phone" required 
               value={this.state.phone} onChange={e => this.setState({ phone: e.target.value })} />
             <br/>
             <br/>
             <p>Please enter your date of birth</p>
             <input type="date" className="input-field" placeholder="Date of Birth" required 
               value={this.state.dob} onChange={e => this.setState({ dob: e.target.value })} />
             <br/>
             <br/>
             <p>Please select your gender</p>
             <input type="radio" id="male" name='gender' 
             value='male' onChange={e => this.setState({ gender: e.target.value })}
             />Male
             <input type="radio" id="female" name='gender' 
             value='female' onChange={e => this.setState({ gender: e.target.value })}
             />Female
             <input type="radio" id="others" name='gender' 
             value='others' onChange={e => this.setState({ gender: e.target.value })}
             />Others
		     <input type='password'className='input-field' placeholder='Enter Password'
             value={this.state.password} onChange={e => this.setState({ password: e.target.value })}
             required />
		     <input type='password'className='input-field' placeholder='Confirm Password' id="password" required 
             value={this.state.confirmPassword} onChange={e => this.setState({ confirmPassword: e.target.value })}
             />
		     <input type='checkbox'className='check-box' /><span>I agree to the terms and conditions</span>
             <input type="submit" value="Submit" onClick={e => this.onSubmit(e)} className="submit-btn" />
	         </form>
            </div>
        </div>
    </div>

      </>
        );
    }


}


function sendEmail() {
//   var toEmail = document.getElementById('email');
//   var password = document.getElementById('password');
// Email.send({
//   SecureToken : "e09cb61c-aaec-4ff7-bc86-39326d58e744",
//   To : toEmail.value,
//   From : "jadhav.deshmukh.padwal@gmail.com",
//   Subject : "Login Credentials",
//   Body : `<p>Please find the below credentials for login</p>
//           <p>Username: ${toEmail.value}</p>
//           <p>Password: ${password.value}</p>`
// }).then(function (message) {
//     alert("mail sent successfully")
//   })
}

// function Register(){
  
//     return(
//         <>
//      <div className="full-page">
        
//         <div id='login-form'className='login-page'>
//             <div className="form-box" style={{height: "680px"}}>
//                 <div className='button-box'>
//                      <div id='btn'></div>
//                 </div>
//          <div className="login-registering">
//             <center>
//                 <h1>Register</h1>
//             </center>
//          </div>
// 		 <form id='register' className='input-group-register' method="POST">
// 		     <input type='text'className='input-field'placeholder='First Name' required />
// 		     <input type='text'className='input-field'placeholder='Last Name ' required />
// 		     <input type='email'className='input-field'placeholder='Email Id' id="email" required />
//              <input type="text" className="input-field" placeholder="Phone" required />
//              <br/>
//              <br/>
//              <p>Please enter your date of birth</p>
//              <input type="date" className="input-field" placeholder="Date of Birth" required />
//              <br/>
//              <br/>
//              <p>Please select your gender</p>
//              <input type="radio" id="male" value="male"/>Male
//              <input type="radio" id="female" value="female" />Female
//              <input type="radio" id="others" value="others" />Others
// 		     <input type='password'className='input-field'placeholder='Enter Password' required />
// 		     <input type='password'className='input-field'placeholder='Confirm Password' id="password" required />
// 		     <input type='checkbox'className='check-box' /><span>I agree to the terms and conditions</span>
//              <input type="button" value="Submit" onclick="sendEmail()" className="submit-btn" />
// 	         </form>
//             </div>
//         </div>
//     </div>

//       </>
//     );
// }

export default Register;
