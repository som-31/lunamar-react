import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class ManagePoolAdmin extends React.Component {

  INSERT_API = 'http://localhost/projects/lunamar-react/server/insertplant.php';
  FETCH_API = 'http://localhost/projects/lunamar-react/server/fetchplant.php';
  DELETE_API = 'http://localhost/projects/lunamar-react/server/deleteplant.php';

  constructor(props) {
    super(props);
    this.state = {
      PoolId: '',
      SubdivisionName: '',
      OpeningHour: '',
      ClosingingHour: '',
      LastInspectionAt: '',
      NextInspectionAt: '',
      Actions: '',
      poolRecords: {}
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
          plantRecords: result.data,
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
    let plants = [];
    for (let index = 0; index < this.state.plantRecords.length; index++) {
      plants[index] = this.state.plantRecords[index];
    }
    return plants.map((plant, index) => {
       const {id, SubdivisionName, OpeningHour, ClosingingHour, LastInspectionAt, NextInspectionAt} = plant //destructuring
       return (
          <tr key={id}>
             <td>{SubdivisionName}</td>
             <td>{OpeningHour}</td>
             <td>{ClosingingHour}</td>
             <td>{LastInspectionAt}</td>
             <td>{NextInspectionAt}</td>
             <td>{SubdivisionName}</td>
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
          <h1>Manage Pools</h1>
      </center>
   </div>
<form id='register' class='input-group-register'>
    <br/>
    <input type="number" class='input-field' placeholder='Pool Id' required/> 
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
    <p>Opening Hours</p>
    <input type="time" class='input-field' required name="" id="opening_hours"/>
    <br/>
    <label for="closing_hours">Closing Hours</label>
    <input type="time" class='input-field' required name="" id="closing_hours"/>
    <br/>
    <p>Last Inspection At</p>
    <input type="date" class='input-field' required name="" id="Last Inspection At"/>
    <br/>
    <label for="Next_Ispection">Next Inspection At</label>
    <input type="date" class='input-field' required name="" id="Next Inspection At"/>
    <br/>
    <button type='submit'class='submit-btn'>Submit</button>
    </form>
    </div>
    </div>
    
      </>
    );
}
}


export default ManagePoolAdmin;
