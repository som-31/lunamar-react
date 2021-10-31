import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      {/* <Home /> */}
      {/* <AboutUs /> */}
    </div>
    <Switch>
      <Route path="/register" exact component={Register}></Route>
    </Switch>
    </Router>
  );
}

export default App;
