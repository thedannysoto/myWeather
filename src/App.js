import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchCurrentWeather } from './actions/weatherActions'

class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchCurrentWeather()
  }
  render() {

    
  return (
    <div className="App">
      <h1>Weather</h1>
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
