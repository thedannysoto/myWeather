import React, { Component } from 'react'
import ZipInput from '../components/ZipInput';
import { fetchCurrentWeather, sendSearch } from '../actions/weatherActions'
import RecentSearches from '../components/RecentSearches';
import WeatherContainer from './WeatherContainer';
import {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

import { connect } from 'react-redux'

class ZipContainer extends Component {

    handleSelect = address => {
        this.sendLocationData(address, this.props.fetchCurrentWeather);
      };

    handleOnClick = event => {
        this.sendLocationData(event.target.innerText, this.props.fetchCurrentWeather)
    }
    
      sendLocationData(address, fetchWeather) {
        geocodeByAddress(address)
        .then(results => {
            console.log(results[0].formatted_address);
            return getLatLng(results[0])
        })
        .then(latLng => {
            this.props.addLocation(address);
            this.props.addUrl(latLng)})
        .then(results => fetchWeather());
      }

    
    render() {


        return(
            <div id="top-container">
                <ZipInput handleSelect={this.handleSelect} sendSearch={this.props.sendSearch} fetchCurrentWeather={ this.props.fetchCurrentWeather } addUrl={this.props.addUrl} zip={this.props.zip} addLocation={this.props.addLocation} />
            <div id="recent-searches" style={{display: "none"}}>
                <h3>Recent Searches</h3>
                <RecentSearches  handleOnClick={this.handleOnClick} searches={this.props.searches} />
            </div>
                <WeatherContainer />
            </div>
        )
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        addUrl: url => dispatch({ type: "ADD_URL", url }),
        addLocation: location => dispatch({ type: "ADD_LOCATION", location }),
        fetchCurrentWeather: () => dispatch(fetchCurrentWeather()),
        sendSearch: () => dispatch(sendSearch())
    }
}

const mapStateToProps = state => {
    return {
        zip: state.zip,
        recent: state.recent,
        searches: state.searches
    }
}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(ZipContainer)