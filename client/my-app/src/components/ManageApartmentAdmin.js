import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ManageApartmentAdmin extends React.Component {

  FETCH_API = 'http://localhost:8000/api/apartmentList/';

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      floors: '',
      total_apartments: '',
      occupancy: '',
      dataSent: '',
      buildingRecords: {}

    };
    this.onSubmit = this.onSubmit.bind(this);
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
          buildingRecords: result.data,
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
    let buildings = [];
    for (let index = 0; index < this.state.buildingRecords.length; index++) {
      buildings[index] = this.state.buildingRecords[index];
    }
    return buildings.map((building, index) => {
       const { id, subdivision_name, floors, services, owner_name} = building //destructuring
       return (
          <tr key={id}>
             <td>{subdivision_name}</td>
             <td>{floors}</td>
             <td>{services}</td>
             <td>{owner_name}</td>
             <td>
                <button onClick={this.handleUpdate.bind(this, id)}><img src="assets/icons/pencil.png"alt='Update'  width="20" height="20" /></button>
                <button onClick={this.handleDelete.bind(this, id)}><img src="assets/icons/trash.png" alt='Trash' width="20" height="20" /></button>
              </td>
          </tr>
       )
    })
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
              <h1>Manage Apartments</h1>
          </center>
       </div>
        <form id='register' class='input-group-register'>
            <div>
                <label for="">Select Building</label>
                <select name="" id="" class='input-field'>
                    <option value="">Select</option>
                    <option value="">Lunamar</option>
                    <option value="">Supertech</option>
                    <option value="">Gaur</option>
                </select>
            </div>
            <br/>
            <br/>
            <div>
                <label for="">Select Owner</label>
                <select name="" id="" class='input-field'>
                    <option value="">Select</option>
                    <option value="">Sayali Deshmukh</option>
                    <option value="">Rohit Padwal</option>
                    <option value="">Somnath Jadhav</option>
                </select>
            </div>
            <br/>
            <br/>
            <div>
                <label for="">Select Services</label>
                <select name="" id="" class="input-field">
                    <option value="">Electricity</option>
                    <option value="">Light</option>
                    <option value="">Water</option>
                    <option value="">Internet</option>
                </select>
            </div>
            <br/>
            <input type="number" name="" id="" placeholder="Floor" class="input-field"/>
            <input type="text" name="" id="" placeholder="Apartment Id" class="input-field"/>
            <button type='submit'class='submit-btn'>Submit</button>
        </form>
          </div>
      </div>
       <br/>
       <center>
          <table>
            <tr>
              <th>Subdivision</th>
              <th>Floors</th>
              <th>Services</th>
              <th>Owner Name</th>
              <th>Actions</th>
            </tr>
            {
              this.renderTableData()
            }
          </table>
        </center>
            
    
          </>
    );
  }
}


export default ManageApartmentAdmin;