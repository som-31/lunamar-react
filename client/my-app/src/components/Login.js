import React from 'react';
import { BrowserRouter, Link, withRouter } from 'react-router-dom';
import axios from 'axios';


class Login extends React.Component {

    API_PATH = 'http://localhost/projects/lunamar-react/server/login.php'

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            userData: ''
        };
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
         console.log(result);

         this.setState({
             userData: result.data,
         })
         console.log(this.state)
         this.props.history.push('/manager');
     })
     .catch(error => this.setState({
         error: error.message
     }));
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
                <form id='login' className='input-group-login' method='post'>
            <input type='text' className='input-field' placeholder='Email Id' required
            value={this.state.email} onChange={e => this.setState({ email: e.target.value })}
            />
		    <input type='password'className='input-field'placeholder='Enter Password' required 
            value={this.state.password} onChange={e => this.setState({ password: e.target.value })}
            />
		    <input type='checkbox'className='check-box' /><span>Remember Password</span>
		    <input type='submit'className='submit-btn' value='Sign In' onClick={e => this.onSubmit(e)}/>
		 </form>
         <span>Want to be part of us. Then <Link to='/register' >Register</Link> here.</span>
            </div>
        </div>
        </BrowserRouter>
        </>
        );
    }

}



// function Login(){

//     return (
//         <>
//         <BrowserRouter>
//         <div id='login-form' className='login-page'>
//             <div className="form-box" style={{height: "470px"}}>
//                 <div className='button-box'>
//                     <div id='btn'></div>
//                 </div>
//                 <div className="login-heading">
//                    <center>
//                        <h1>Login</h1>
//                    </center>
//                 </div>
//                 <form id='login' className='input-group-login'>
//                     <input type='text'className='input-field'placeholder='Email Id' required />
// 		    <input type='password'className='input-field'placeholder='Enter Password' required />
// 		    <input type='checkbox'className='check-box' /><span>Remember Password</span>
// 		    <button type='submit'className='submit-btn'>Log in</button>
// 		 </form>
//          <span>Want to be part of us. Then <Link to='/register' >Register</Link> here.</span>
//             </div>
//         </div>
//         </BrowserRouter>
//         </>
//     );
// }

export default withRouter(Login);