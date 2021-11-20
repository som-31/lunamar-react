import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ManageBuildingAdmin extends React.Component {

  INSERT_API = 'http://localhost/projects/lunamar-react/server/manageBuildingInsert.php';
  FETCH_API = 'http://localhost/projects/lunamar-react/server/fetchBuilding.php';

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
      //  console.log(JSON.parse(result)); 
        console.log('in Then Statement')
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


  renderTableData() {
    let buildings = [];
    for (let index = 0; index < this.state.buildingRecords.length; index++) {
      buildings[index] = this.state.buildingRecords[index];
    }
    return buildings.map((building, index) => {
       const { id, name, floors, occupancy, total_apartments} = building //destructuring
       return (
          <tr key={id}>
             <td>{name}</td>
             <td>{floors}</td>
             <td>{occupancy}</td>
             <td>{total_apartments}</td>
             <td>
                <button><img src="assets/icons/pencil.png"alt='Update'  width="20" height="20" /></button>
                <button><img src="assets/icons/trash.png" alt='Trash' width="20" height="20" /></button>
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
        <Link to="/manage-manager">Manage Manager</Link>

            <Link to="/manage-building-admin">Manage Building</Link>
            <Link to='/manage-resident-admin'>Manage Resident</Link>
            <Link to='/manage-apartment-admin'>Manage Apartment</Link>
            <Link to='/manage-service-admin'>Manage Service</Link>
            <Link to='/manage-visitor-admin'>Manage Visitor</Link>
            <Link to='/manage-amenities-admin'>Manage Amenities</Link>
            <Link to='/chat-admin'>Chat</Link>
    </div>

        <div id='login-form' class='login-page'>
          <div class="form-box">
            <div class='button-box'>
              <div id='btn'></div>

            </div>

            <div class="login-registering">
              <center>
                <h1>Manage Buildings</h1>
              </center>
            </div>
            {/* <form id='register' class='input-group-register'>
              <input type='text' class='input-field' placeholder='Name' required />
              <input type="number" class='input-field' placeholder='Floors' required />
              <input type='number' class='input-field' placeholder='Total Apartments' required />
              <input type="number" class="input-field" placeholder="Occupancy" required />
              <button type='submit' class='submit-btn'>Submit</button>
            </form> */}
            <form action='' id='register' method='post'>
                                <input 
                                type="text" className="field" id="name" placeholder="Your Name" required
                                value={this.state.name}
                                onChange={e => this.setState({ name: e.target.value })} />
                                <input type="number" className="field" id="floors" placeholder="Floors" required
                                value={this.state.floors}
                                onChange={e => this.setState({ floors: e.target.value })}
                                />
                                <input type="number" className="field" id="total_apartments" placeholder="Total Apartments"  required 
                                value={this.state.total_apartments}
                                onChange={e => this.setState({ total_apartments: e.target.value })}
                                />
                                <input type="number" className="field" placeholder="Occupancy" id="occupancy" required
                                value={this.state.occupancy}
                                onChange={e => this.setState({ occupancy: e.target.value })}
                                />
                                <input type="submit" 
                                value="Submit" 
                                onClick={e => this.onSubmit(e)} 
                                className="submit-btn" />
                            </form>
          </div>
        </div>
        <center>
          <table>
            <tr>
              <th>Name</th>
              <th>Floors</th>
              <th>Occupancy</th>
              <th>Total Apartments</th>
              <th>Actions</th>
            </tr>
            {
              this.renderTableData()
            }
            {/* <tr>
              <td>Alfreds Futterkiste</td>
              <td>23</td>
              <td>23</td>
              <td>23</td>
              <td>
                <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
                <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
              </td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>43</td>
              <td>23</td>
              <td>64</td>
              <td>
                <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
                <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
              </td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>53</td>
              <td>23</td>
              <td>344</td>
              <td>
                <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
                <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
              </td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>45</td>
              <td>23</td>
              <td>466</td>
              <td>
                <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
                <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
              </td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>54</td>
              <td>466</td>
              <td>23</td>
              <td>
                <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
                <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
              </td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>53</td>
              <td>465</td>
              <td>23</td>
              <td>
                <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
                <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
              </td>
            </tr> */}
          </table>
        </center>


      </>
    );
  }
}


export default ManageBuildingAdmin;