import React from 'react';
import axios from 'axios'
import {
    CONTACT_US_TEMPLATE_ID,
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    EMAIL_USER_ID,
    SERVER_URL
} from "../lib/constants";
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';

class ContactUs extends React.Component {

<<<<<<< HEAD
    API_PATH = SERVER_URL+'/contactus';

=======
    FETCH_API = 'http://localhost:8000/api/contactusList/';
    INSERT_API = 'http://localhost:8000/api/saveContactus/';
    DELETE_API = 'http://localhost:8000/api/deleteContactus/';
    
>>>>>>> 10199cd80f2c867784c67e62075043ca06902593
    constructor(props){
        super(props);
        init(EMAIL_USER_ID);
        this.state = {
            name:'',
            email: '',
            phone: '',
            query: '',
            errors: {}
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleFormValidations = this.handleFormValidations.bind(this);
    }

    handleFormValidations(){

        let errors = {};
        let formIsValid = true;

        //Name
        if (!this.state.name) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
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
        if(!this.state.query){
            formIsValid = false;
            errors['query'] = 'Cannot be empty';
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



        this.setState({ errors: errors });
        return formIsValid;
    }

    componentDidMount(){
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
                   console.log(result)
                   let templateParams = {
                       from_name: this.state.name,
                       message: this.state.query,
                   };
                   emailjs.send(EMAIL_SERVICE_ID,
                       CONTACT_US_TEMPLATE_ID,
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
       }else {
           console.log('Form has errors', this.state.errors);
       }
    }


    render(){
        return(
            <>
            <div className="container">
                    <div className="contact-box">
                        <div className="left"></div>
                        <div className="right">
                            <center><h2>Contact Us</h2></center>
                            <form action='' id='contact' method='post'>
                                <input 
                                type="text" className="field" id="name" placeholder="Your Name" required
                                value={this.state.name}
                                onChange={e => this.setState({ name: e.target.value })} />
                                <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                                <br />
                                <input type="email" className="field" id="email" placeholder="Your Email" required
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                                <br />

                                <input type="text" className="field" placeholder="Phone"  required 
                                value={this.state.phone}
                                onChange={e => this.setState({ phone: e.target.value })}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>
                                <br />

                                <textarea placeholder="Query" id="query" className="field" required
                                value={this.state.query}
                                onChange={e => this.setState({ query: e.target.value })}
                                ></textarea>
                                <span style={{ color: "red" }}>{this.state.errors["query"]}</span>
                                <br />

                                <input type="submit" 
                                value="Submit" 
                                onClick={e => this.onSubmit(e)} 
                                className="submit-btn" />
                            </form>
                        </div>
                    </div>
                    <div className=" box feedback-form">
                        {this.state.dataSent ? 
                        <p className="msg">
                        SUCCESS<br/><br/>
                        Thanks for submitting your feedback.<br/>
                        We appreciate your time.
                        </p>
                        :''}
                        <p></p>
                    </div>
            </div>
        </>
        );
    }
}

export default ContactUs;