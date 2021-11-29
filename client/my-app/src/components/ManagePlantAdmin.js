import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ManagePlantAdmin extends React.Component {

  INSERT_API = 'http://localhost/projects/lunamar-react/server/insertplant.php';
  FETCH_API = 'http://localhost/projects/lunamar-react/server/fetchplant.php';
  DELETE_API = 'http://localhost/projects/lunamar-react/server/deleteplant.php';

  constructor(props) {
    super(props);
    this.state = {
      PlantType: '',
      PlantName: '',
      Description: '',
  
      plantRecords: {}
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
       const {PlantType, PlantType, Description } = plant //destructuring
       return (
          <tr key={id}>
             <td>{PlantType}</td>
             <td>{PlantType}</td>
             <td>{Description}</td>
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

            <Link to="/manage-building-admin">Manage plant</Link>
            <Link to='/manage-resident-admin'>Manage Resident</Link>
            <Link to='/manage-apartment-admin'>Manage Apartment</Link>
            <Link to='/manage-service-admin'>Manage Service</Link>
            <Link to='/manage-visitor-admin'>Manage Visitor</Link>
            <Link to='/manage-amenities-admin'>Manage Amenities</Link>
            <Link to='/chat-admin'>Chat</Link>
    </div>
    <div id='login-form'class='login-page'>
      <div class="form-box" style="height: 560px;">
          <div class='button-box'>
               <div id='btn'></div>
              
          </div>
          
   <div class="login-registering">
      <center>
          <h1>Manage Plants</h1>
      </center>
      </div>
      <form id='register' class='input-group-register'>
      <input type='text'class='input-field'placeholder='Plant Type' required/>
      <br/>
        
      <input type='text'class='input-field'placeholder='Plant Name' required/>
      <br/>
      <br/>
      <textarea placeholder="Plant Description" class="field" style="border: 1px solid black;"></textarea>
      <br/>
      <br/>
      <br/>
      <br/>

      <button type='submit'class='submit-btn'>Submit</button>
      </form>
      </div>
      </div>
        

      </>
    );
}
}

export default ManagePlantAdmin;