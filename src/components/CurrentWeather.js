import React, { Component } from 'react'
import DailyWeather from './DailyWeather';




class CurrentWeather extends Component {

    capitalizeString(string) {
        return string.split(" ").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ")
    }


    render () {

        return(
            <>
                {this.props.weather.map((weather, idx) => {
                    return (
                    
                    <div id="current-weather" key={idx}>
                    <h1 id="city-name">{this.props.location}</h1>
                    <h3 id="today-forecast">Today's Forecast: {this.capitalizeString(weather.weather.current.weather[0].description)}</h3>
                        <div id="current-temps">
                            <p>Current Temperature: {Math.round(weather.weather.current.temp)}°</p>
                            <p>Feels like: {Math.round(weather.weather.current.feels_like)}°</p>
                            <p>Today's High: {Math.round(weather.weather.daily[0].temp.max)}°</p>
                            <p>Today's Low: {Math.round(weather.weather.daily[0].temp.min)}°</p>
                        </div>
                        <div id="forecast-button-container">
                            <button id="forecast-button" onClick={this.props.handleOnClick}>See 7 Day Forecast</button>
                        </div>
                        <div id="forecast-container">
                            <DailyWeather key={weather.weather.current.dt} sendSearch={this.props.sendSearch} weather={this.props.weather} />
                        </div>
                    </div>
                    )
                })}
                
            </>
        )
    }
}

export default CurrentWeather