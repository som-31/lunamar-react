import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Home from './components/Home';
import ServicesInformation from './components/ServicesInformation'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Manager from './components/manager/Manager';


function App() {
  return (
    <Router>

    <div className="App">

      <Header />



      {/* <Home /> */}

      {/* <AboutUs /> */}

    </div>

    <Switch>


      <Route path="/manager" exact>
        <Manager/>
        </Route>


    </Switch>

    </Router>

  );
}

export default App;
