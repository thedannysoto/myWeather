import React, { Component } from 'react'
import CurrentWeather from '../components/CurrentWeather';
import { sendSearch } from '../actions/weatherActions';

import { connect } from 'react-redux'


class WeatherContainer extends Component {

    handleOnClick() {
        const dailyDiv = document.getElementById("daily-weather");
        dailyDiv.style.display = "block";
    }

    render() {

        return(
             // div display => "block" in weatherReducer  'ADD_CURRENT_WEATHER
            <div id="main-container" style={{display: "none"}}>
                <CurrentWeather location={this.props.location} sendSearch={this.props.sendSearch} weather={this.props.weather} handleOnClick={this.handleOnClick}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        weather: state.weather,
        location: state.location
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendSearch: () => dispatch(sendSearch()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)