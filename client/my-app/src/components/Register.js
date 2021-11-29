import React from 'react';
import axios from 'axios';
import {EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_USER_ID, SERVER_URL} from "../lib/constants";
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';

class Register extends React.Component {

    API_PATH = SERVER_URL+'/register';

    constructor(props){
        super(props);
        init(EMAIL_USER_ID);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            date_of_birth: '',
            gender: '',
            password: '',
            confirmPassword: '',
            errors: {},
            userSuccess: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleFormValidations = this.handleFormValidations.bind(this);
    }


    handleFormValidations(){

        let errors = {};
        let formIsValid = true;

        //firstName
        if (!this.state.first_name) {
            formIsValid = false;
            errors["first_name"] = "Cannot be empty";
        }

        //firstName
        if (!this.state.last_name) {
            formIsValid = false;
            errors["last_name"] = "Cannot be empty";
        }

        //Phone
        if(!this.state.phone){
            formIsValid = false;
            errors['phone'] = 'Cannot be empty'
        }
        /**
         * length check
         */
        if(this.state.phone.length !== 10 && !this.state.errors['phone']){
            formIsValid = false;
            errors['phone'] = 'Number length should be 10 only'
        }

        //Query
        if(!this.state.date_of_birth){
            formIsValid = false;
            errors['date_of_birth'] = 'Cannot be empty';
        }

        //Email
        if (!this.state.email) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof this.state.email !== "undefined") {
            let lastAtPos = this.state.email.lastIndexOf("@");
            let lastDotPos = this.state.email.lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    this.state.email.indexOf("@@") == -1 &&
                    lastDotPos > 2 &&
                    this.state.email.length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        //gender
        if(!this.state.gender){
            formIsValid = false;
            errors['gender'] = 'Cannot be empty';
        }

        //password
        if(!this.state.password){
            formIsValid = false;
            errors['password'] = 'Cannot be empty';
        }

        //confirmPassword
        if(!this.state.confirmPassword){
            formIsValid = false;
            errors['confirmPassword'] = 'Cannot be empty';
        }

        //password and Confirm Password
        if(this.state.password !== this.state.confirmPassword){
            formIsValid = false;
            errors['notMatch'] = 'Password and Confirm Password does not match';
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    onSubmit(event){
        event.preventDefault();
        if(this.handleFormValidations()){
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
                        userSuccess: "User Registered Successfully",
                    });
                    this.setState({
                        dataSent: result.data.sent,
                    })
                    let templateParams = {
                        to_name: result.data.user.first_name,
                        email: result.data.user.email,
                    };
                    emailjs.send(EMAIL_SERVICE_ID,
                        EMAIL_TEMPLATE_ID,
                        templateParams,
                        EMAIL_USER_ID)
                        .then((result) => {
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });
                })
                .catch(error => this.setState({
                    error: error.message
                }));
        }else{
            console.log('Form has errors', this.state.errors);
        }
     }

    render(){
        
        return(
            <>
     <div className="full-page">
        <div id='login-form'className='login-page'>
            <div className="form-box" style={{height: "800px", 'font-size': '16px'}}>
                <div className='button-box'>
                     <div id='btn'></div>
                </div>
         <div className="login-registering">
            <center>
                <h1>Register</h1>
            </center>
         </div>
                <span style={{ color: "red" }}>{this.state.userSuccess}</span>
                <br />
		 <form id='register' className='input-group-register' method="post">
		     <input type='text'className='input-field'placeholder='First Name' required
             value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })} />
             <span style={{ color: "red" }}>{this.state.errors["first_name"]}</span>
             <br />
             <input type='text'className='input-field'placeholder='Last Name ' required 
             value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })}/>
             <span style={{ color: "red" }}>{this.state.errors["last_name"]}</span>
             <br />
             <input type='email'className='input-field'placeholder='Email Id' id="email" required 
              value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
             <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
             <br />
             <input type="text" className="input-field" placeholder="Phone" required 
               value={this.state.phone} onChange={e => this.setState({ phone: e.target.value })} />
             <br/>
             <br/>
             <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>
             <br />
             <p>Please enter your date of birth</p>
             <input type="date" className="input-field" placeholder="Date of Birth" required 
               value={this.state.date_of_birth} onChange={e => this.setState({ date_of_birth: e.target.value })} />
             <br/>
             <span style={{ color: "red" }}>{this.state.errors["date_of_birth"]}</span>
             <br />
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
             <span style={{ color: "red" }}>{this.state.errors["gender"]}</span>
             <br />
		     <input type='password'className='input-field' placeholder='Enter Password'
             value={this.state.password} onChange={e => this.setState({ password: e.target.value })}
             required />
             <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
             <br />
		     <input type='password'className='input-field' placeholder='Confirm Password' id="password" required 
             value={this.state.confirmPassword} onChange={e => this.setState({ confirmPassword: e.target.value })}
             />
             <span style={{ color: "red" }}>{this.state.errors["confirmPassword"]}</span>
             <br />
             <span style={{ color: "red" }}>{this.state.errors["notMatch"]}</span>
             <br />
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

export default Register;
