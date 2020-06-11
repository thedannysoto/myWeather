import React, {Component} from 'react';
import './App.css';
import ZipInput from './components/ZipInput'
import { connect } from 'react-redux';
import { fetchCurrentWeather } from './actions/weatherActions'

class App extends Component {

  render() {

    
  return (
    <div className="App">
      <h1>My Weather</h1>
      <h3>Look up weather conditions in the U.S.</h3>
      <ZipInput fetchCurrentWeather={ this.props.fetchCurrentWeather }/>
    </div>
  );
  }
  
}

const mapStateToProps = state => {
  return {
    weather: state.weather,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentWeather: () => dispatch(fetchCurrentWeather())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
