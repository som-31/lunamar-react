import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ManageBuildingManager extends React.Component {

  INSERT_API = 'http://localhost/projects/lunamar-react/server/managebuildinginsert.php';
  // let FETCH_API = 'http://localhost/projects/lunamar-react/server/managebuildingfetch.php';

  

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

// // ComponentDidMount is used to
//     // execute the code 
//     componentDidMount() {
//       fetch(
//         FETCH_API)
//           .then((res) => res.json())
//           .then((json) => {
//               this.setState({
//                   items: json,
//                   DataisLoaded: true
//               });
//           })
//   }

  onSubmit(event) {
    event.preventDefault();
    console.log('in Submit function');
    console.log(this.state);
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
  render() {
    return (

      <>
        <div class="sidebar">
          <Link to="/manage-building-manager">Manage Building</Link>
          <Link to='/manage-resident-manager'>Manage Resident</Link>
          <Link to='/manage-apartment-manager'>Manage Apartment</Link>
          <Link to='/manage-service-manager'>Manage Service</Link>
          <Link to='/manage-visitor-manager'>Manage Visitor</Link>
          <Link to='/manage-amenities-manager'>Manage Amenities</Link>
          <Link to='/chat-manager'>Chat</Link>
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
              <th>Total Apartments</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
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
              <td>64</td>
              <td>
                <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
                <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
              </td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>53</td>
              <td>344</td>
              <td>
                <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
                <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
              </td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>45</td>
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
              <td>
                <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
                <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
              </td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>53</td>
              <td>465</td>
              <td>
                <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
                <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
              </td>
            </tr>
          </table>
        </center>


      </>
    );
  }
}
// function ManageBuildingManager() {

//   return (
//     <>
//       <div class="sidebar">
//         <Link to="/manage-building-manager">Manage Building</Link>
//         <Link to='/manage-resident-manager'>Manage Resident</Link>
//         <Link to='/manage-apartment-manager'>Manage Apartment</Link>
//         <Link to='/manage-service-manager'>Manage Service</Link>
//         <Link to='/manage-visitor-manager'>Manage Visitor</Link>
//         <Link to='/manage-amenities-manager'>Manage Amenities</Link>
//         <Link to='/chat-manager'>Chat</Link>
//       </div>

//       <div id='login-form' class='login-page'>
//         <div class="form-box">
//           <div class='button-box'>
//             <div id='btn'></div>

//           </div>

//           <div class="login-registering">
//             <center>
//               <h1>Manage Buildings</h1>
//             </center>
//           </div>
//           <form id='register' class='input-group-register'>
//             <input type='text' class='input-field' placeholder='Name' required />
//             <input type="number" class='input-field' placeholder='Floors' required />
//             <input type='number' class='input-field' placeholder='Total Apartments' required />
//             <input type="number" class="input-field" placeholder="Occupancy" required />
//             <button type='submit' class='submit-btn'>Submit</button>
//           </form>
//         </div>
//       </div>
//       <center>
//         <table>
//           <tr>
//             <th>Name</th>
//             <th>Floors</th>
//             <th>Total Apartments</th>
//             <th>Actions</th>
//           </tr>
//           <tr>
//             <td>Alfreds Futterkiste</td>
//             <td>23</td>
//             <td>23</td>
//             <td>
//               <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
//               <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
//             </td>
//           </tr>
//           <tr>
//             <td>Centro comercial Moctezuma</td>
//             <td>43</td>
//             <td>64</td>
//             <td>
//               <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
//               <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
//             </td>
//           </tr>
//           <tr>
//             <td>Ernst Handel</td>
//             <td>53</td>
//             <td>344</td>
//             <td>
//               <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
//               <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
//             </td>
//           </tr>
//           <tr>
//             <td>Island Trading</td>
//             <td>45</td>
//             <td>466</td>
//             <td>
//               <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
//               <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
//             </td>
//           </tr>
//           <tr>
//             <td>Laughing Bacchus Winecellars</td>
//             <td>54</td>
//             <td>466</td>
//             <td>
//               <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
//               <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
//             </td>
//           </tr>
//           <tr>
//             <td>Magazzini Alimentari Riuniti</td>
//             <td>53</td>
//             <td>465</td>
//             <td>
//               <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20" /></button>
//               <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20" /></button>
//             </td>
//           </tr>
//         </table>
//       </center>


//     </>
//   );
// }

export default ManageBuildingManager;