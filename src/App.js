import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import ZipContainer from './containers/ZipContainer';
import Home from './containers/Home';
import About from './components/About';
// import { Router } from 'react-router-dom';


class App extends Component {

  render() {

    
  return (
    <Router>
    <div className="App">
      <div id="nav">
      <NavLink to="/" exact className="top-link" >- Home - </NavLink>
      <NavLink to="/about" exact className="top-link" >- About -</NavLink>
      </div>
      <h1 id="my-weather">My Weather</h1>
      <h3 id="tag-line">Look up weather conditions in the U.S.</h3>
      <Route exact path="/" component={Home} />
      <Route exact path="/weather" component={ZipContainer} />
      <Route exact path="/about" component={About} />
      
    </div>
    </Router>
  );
  } 
}


export default App;
