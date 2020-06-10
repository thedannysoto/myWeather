import React, {Component} from 'react';
import './App.css';

class App extends Component {

  render() {

    const getWeather = () => {
      fetch('http://api.openweathermap.org/data/2.5/weather?zip=64137,us&units=imperial&APPID=8cabadff1f39fef97e9c9ce17cf34e31')
        .then(response => response.json)
        .then(data => console.log(data))
    }
  return (
    <div className="App">
      <h1>Weather</h1>
      {getWeather()}
    </div>
  );
  }
  }


export default App;
