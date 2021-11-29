import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ManageGardenAdmin extends React.Component {

  API_PATH = 'http://localhost/projects/lunamar-react/server/managegardenadmin.php'

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      floors: '',
      total_apartments: '',
      occupancy: '',
      dataSent: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
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
  render() {
    return (

      <>
  
      <div class="sidebar">
       <Link to="/manage-reports-admin">Manage Reports</Link>
       <Link to="/manage-manager-admin">Manage Manager</Link>
    
                <Link to="/manage-building-admin">Manage Building</Link>
                <Link to='/manage-resident-admin'>Manage Resident</Link>
                <Link to='/manage-apartment-admin'>Manage Apartment</Link>
                <Link to='/manage-service-admin'>Manage Service</Link>
                <Link to='/manage-visitor-admin'>Manage Visitor</Link>
                <Link to='/manage-amenities-admin'>Manage Amenities</Link>
                <Link to='/chat-admin'>Chat</Link>
        </div>
        <div id='login-form'class='login-page'>
          <div class="form-box">
              <div class='button-box'>
                   <div id='btn'></div>
                 
              </div>
              
       <div class="login-registering">
          <center>
              <h1>Manage Gardens</h1>
          </center>
       </div>
    <form id='register' class='input-group-register'>
       <input type='text'class='input-field'placeholder='Garden Name' required/>
        <br/>
        <br/>
        <p>Opening Hours</p>
        <input type="time" class='input-field' required name="" id="opening_hours"/>
        <br/>
        <label for="closing_hours">Closing Hours</label>
        <input type="time" class='input-field' required name="" id="closing_hours"/> 
        <br/>
        <br/>
        <label for="gardener">Select Gardener</label>
        <select name="gardener" id="gardener">
            <option value="">Select</option>
            <option value="">Michael Kors</option>
            <option value="">Rohit padwal</option>
            <option value="">Sayali Deshmukh</option>
            <option value="">Somnath Jadhav</option>
        </select>
        <br/>
        <br/>
        <label for="subdivision">Select Subdivision</label>
        <select name="subdivision" id="subdivision">
            <option value="">Select</option>
            <option value="">Lunamar</option>
            <option value="">Supertech</option>
            <option value="">Gaur</option>
        </select>
        <br/>
        <br/>
                  <button type='submit'class='submit-btn'>Submit</button>
         </form>
          </div>
      </div>
        <center>
    <table>
        <tr>
          <th>Garden Name</th>
          <th>Opening Hours</th>
          <th>Closing Hours</th>
          <th>Gardener</th>
          <th>Subdivision</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>06:00 AM</td>
          <td>11:00 PM</td>
          <td>Sayali Deshmukh</td>
          <td>Lunamar</td>
          <td>
            <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
          <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
        </td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>06:00 AM</td>
          <td>11:00 PM</td>
          <td>Rohit Padwal</td>
          <td>Lunamar</td>
          <td>
            <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
          <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
        </td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>06:00 AM</td>
          <td>11:00 PM</td>
          <td>Somnath Jadhav</td>
          <td>Lunamar</td>
          <td>
            <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
          <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
        </td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>06:00 AM</td>
          <td>11:00 PM</td>
          <td>Rohit Padwal</td>
          <td>Lunamar</td>
          <td>
            <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
          <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
        </td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>06:00 AM</td>
          <td>11:00 PM</td>
          <td>Sayali Deshmukh</td>
          <td>Lunamar</td>
          <td>
            <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
          <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
        </td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>06:00 AM</td>
          <td>11:00 PM</td>
          <td>Somnath Jadhav</td>
          <td>Lunamar</td>
          <td>
            <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"></img></button>
          <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"></img></button>
        </td>
        </tr>
      </table>
    </center>
            
    
          </>
    );
  }
}


export default ManageGardenAdmin;