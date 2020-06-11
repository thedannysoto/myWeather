import React, {Component} from 'react';
import './App.css';
import ZipContainer from './containers/ZipContainer';
import WeatherContainer from './containers/WeatherContainer';


class App extends Component {

  render() {

    
  return (
    <div className="App">
      <ZipContainer />
      <WeatherContainer />
    </div>
  );
  } 
}


export default App;
