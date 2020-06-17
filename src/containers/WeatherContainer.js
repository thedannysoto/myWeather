import React, { Component } from 'react'
import CurrentWeather from '../components/CurrentWeather';
import { fetchDailyWeather } from '../actions/weatherActions';

import { connect } from 'react-redux'


class WeatherContainer extends Component {

    handleOnClick() {
        const dailyDiv = document.getElementById("daily-weather");
        dailyDiv.style.display = "block";
    }

    render() {

        return(
            <div id="main-container" style={{display: "none"}}>
                <CurrentWeather dailyWeather={this.props.dailyWeather} weather={this.props.weather} fetchDailyWeather={this.props.fetchDailyWeather} addUrlTwo={this.props.addUrlTwo} handleOnClick={this.handleOnClick}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        weather: state.weather,
        dailyWeather: state.dailyWeather
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUrlTwo: coordinates => dispatch({ type: 'ADD_URL_TWO', coordinates }),
        fetchDailyWeather: () => dispatch(fetchDailyWeather())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)