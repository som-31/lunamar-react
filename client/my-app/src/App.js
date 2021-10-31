import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Register';
import Manager from './components/manager/Manager';
import SuperAdmin from './components/superadmin/SuperAdmin';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      {/* <Home /> */}
      {/* <AboutUs /> */}
    </div>
    <Switch>
      <Route path="/register" exact><Register /></Route>
      <Route path="/manager" exact><Manager /></Route> 
      <Route path="/superadmin" exact><SuperAdmin /></Route>
    </Switch>
    </Router>
  );
}

export default App;
