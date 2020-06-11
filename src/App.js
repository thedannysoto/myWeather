import React, {Component} from 'react';
import './App.css';

class App extends Component {

  render() {

    const getWeather = () => {
      fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk", {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "530d5f74demsh2b6328cb768cdacp1f9285jsn320a0de7d912"
	      }
      })
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
