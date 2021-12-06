import React from 'react';
import { BrowserRouter, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import {SERVER_URL} from "../lib/constants";

class Login extends React.Component {

    API_PATH = SERVER_URL+'/login';

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            userData: '',
            errors: {}
        };
        this.handleFormValidations = this.handleFormValidations.bind(this);
    }

    handleFormValidations(){

        let errors = {};
        let formIsValid = true;


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
        //Password
        if(!this.state.password){
            formIsValid = false;
            errors['password'] = 'Cannot be empty';
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
                    if(result.status === 200){
                        this.setState({
                            userData: result.data,
                        })
                        switch (result.data.user.id) {
                            case 15:
                                this.props.history.push('/superadmin');
                                break;

                            case 16:
                                this.props.history.push('/manager');
                                break;

                            case 18:
                                this.props.history.push('/resident');
                                break;

                            case 19:
                                this.props.history.push('/visitor');
                                break;

                            default:
                                this.props.history.push('/resident');

                        }
                        // console.log(this.state)
                        // this.props.history.push('/manager');
                    }else{
                         // let errors['login'] = 'Incorrect Credentials. Please try again.'
                        this.setState({
                            errors: {
                                'login' : 'Incorrect Credentials. Please try again.'
                            }
                        });
                        console.log('User not found');
                    }
                    console.log(result);
                })
                .catch(error => this.setState({
                    error: error.message
                }));
        }else {
            console.log('Form has errors', this.state.errors);
        }
     }
    render(){
        return(
        <>
        <BrowserRouter>
        <div id='login-form' className='login-page'>
            <div className="form-box" style={{height: "470px"}}>
                <div className='button-box'>
                    <div id='btn'></div>
                </div>
                <div className="login-heading">
                   <center>
                       <h1>Login</h1>
                   </center>
                </div>
                <span style={{ color: "red" }}>{this.state.errors["login"]}</span>
                <br />
                <form id='login' className='input-group-login' method='post'>
            <input type='text' className='input-field' placeholder='Email Id' required
            value={this.state.email} onChange={e => this.setState({ email: e.target.value })}
            />
                    <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                    <br />
		    <input type='password'className='input-field'placeholder='Enter Password' required 
            value={this.state.password} onChange={e => this.setState({ password: e.target.value })}
            />
                    <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                    <br />
		    <input type='checkbox'className='check-box' /><span>Remember Password</span>
		    <input type='submit'className='submit-btn' value='Sign In' onClick={e => this.onSubmit(e)}/>
		 </form>
         <span id='login-span'>Want to be part of us. Then <Link to='/register' >Register</Link> here.</span>
            </div>
        </div>
        </BrowserRouter>
        </>
        );
    }
}
export default withRouter(Login);