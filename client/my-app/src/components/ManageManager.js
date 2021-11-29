import React from 'react';
import { Link } from 'react-router-dom';

class ManageManagerAdmin extends React.Component {

  INSERT_API = 'http://localhost/projects/lunamar-react/server/insertManager.php';
  FETCH_API = 'http://localhost/projects/lunamar-react/server/fetchmanager.php';
  DELETE_API = 'http://localhost/projects/lunamar-react/server/deletemanager.php';

  constructor(props) {
    super(props);
    this.state = {
      ManagerName: '',
      Email: '',
      Phone: '',
      DateofBirth: '',
      Gender: '',
      Actions: '',
      dataSent: '',
      managerRecords: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.renderTableData = this.renderTableData.bind(this);
  }

  componentDidMount(){

    /**
     * Request to get the data from Backend
     */
    axios({
      method: 'post',
      url: this.FETCH_API,
      headers: {
        'content-type': 'application/json'
      },
      data: this.state
    })
      .then(result => {
        console.log(result);
        this.setState({
          managerRecords: result.data,
        })
        console.log(this.state)
      })
      .catch(error => this.setState({
        error: error.message
      }));
  }

  onSubmit(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: this.INSERT_API,
      headers: {
        'content-type': 'application/json'
      },
      data: this.state
    })
      .then(result => {
        console.log(result);
        this.setState({
          dataSent: result.data.sent,
        })
        console.log(this.state);
      })
      .catch(error => this.setState({
        error: error.message
      }));
  }

  /**
   * Method to handle delete Logic
   * @param {*} id 
   */
  handleDelete(id){
    console.log(id);
    console.log('in here delete function');
    /**
     * Request to delete the data from Backend
     */
         axios({
          method: 'post',
          url: this.DELETE_API,
          headers: {
            'content-type': 'application/json'
          },
          data: { id }
        })
          .then(result => {
            console.log(result);
          })
          .catch(error => {
                  this.setState({
                  error: error.message
                })
                console.log(error);
           });
  }

  /**
   * Method to handle update logic
   * @param {*} id 
   */
  handleUpdate(e, id){
    console.log('in here update function');
    console.log(id);

    e.preventDefault();
    axios({
      method: 'post',
      url: this.INSERT_API,
      headers: {
        'content-type': 'application/json'
      },
      data: this.state
    })
      .then(result => {
        console.log(result);
        this.setState({
          dataSent: result.data.sent,
        })
        console.log(this.state);
      })
      .catch(error => this.setState({
        error: error.message
      }));
  }


  renderTableData() {
    let manager = [];
    for (let index = 0; index < this.state.managerRecords.length; index++) {
      manager[index] = this.state.managerRecords[index];
    }
    return manager.map((manager, index) => {
       const { Phone} = manager //destructuring
       return (
          <tr key={id}>
             <td>{ManagerName}</td>
             <td>{Email}</td>
             <td>{Phone}</td>
             <td>{DateofBirth}</td>
             <td>{Gender}</td>
           <td>
                <button onClick={this.handleUpdate.bind(this, id)}><img src="assets/icons/pencil.png"alt='Update'  width="20" height="20" /></button>
                <button onClick={this.handleDelete.bind(this, id)}><img src="assets/icons/trash.png" alt='Trash' width="20" height="20" /></button>
              </td>
          </tr>
       )
    })
 }

render(){

    return(
        <>
       <div class="sidebar">
   <Link to="/manage-reports-admin">Manage Reports</Link>
        <Link to="/manage-manager">Manage Manager</Link>

            <Link to="/manage-manager-admin">Manage manager</Link>
            <Link to='/manage-resident-admin'>Manage Resident</Link>
            <Link to='/manage-apartment-admin'>Manage Apartment</Link>
            <Link to='/manage-service-admin'>Manage Service</Link>
            <Link to='/manage-visitor-admin'>Manage Visitor</Link>
            <Link to='/manage-amenities-admin'>Manage Amenities</Link>
            <Link to='/chat-admin'>Chat</Link>
    </div>
      <div id='login-form'class='login-page'>
      <div class="form-box" style="height: 650px;">
          <div class='button-box'>
               <div id='btn'></div>
              </div>     
              <div class="login-registering">
                  <center>
                      <h1>Manage Managers</h1>
                  </center>
              </div>
              <form id='register' class='input-group-register'>
                <input type='text'class='input-field'placeholder='Manager Name' required/>
                <input type='email'class='input-field'placeholder='Email' required/>
                <input type="text" class="input-field" placeholder="Phone" required/>
                <p>Please enter your date of birth</p>
                <input type="date" class="input-field" placeholder="Date of Birth" required/>
                <p>Please select your gender</p>
                <input type="radio" id="male" value="male">Male</input>
                <input type="radio" id="female" value="female">Female</input>
                <input type="radio" id="others" value="others">Others</input>
                <input type='password'class='input-field'placeholder='Enter Password' required/>
                <input type='password'class='input-field'placeholder='Confirm Password'  required/>
                <input type='checkbox'class='check-box'/><span>I agree to the terms and conditions</span>
                <button type='submit'class='submit-btn'>Register</button></form>
              </div>
              </div>
                
      </>
    );
}
}



export default ManageManagerAdmin;