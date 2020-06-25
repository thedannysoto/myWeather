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
                <CurrentWeather location={this.props.location} sendSearch={this.props.sendSearch} dailyWeather={this.props.dailyWeather} weather={this.props.weather} fetchDailyWeather={this.props.fetchDailyWeather} addUrlTwo={this.props.addUrlTwo} handleOnClick={this.handleOnClick}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        weather: state.weather,
        dailyWeather: state.dailyWeather,
        location: state.location
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendSearch: () => dispatch(sendSearch()),
        addUrlTwo: coordinates => dispatch({ type: 'ADD_URL_TWO', coordinates }),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)