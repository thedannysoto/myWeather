import React, { Component } from 'react'




class CurrentWeather extends Component {

    capitalizeString(string) {
        return string.split(" ").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ")
    }

    render () {

        return(
            <>
                {console.log(this.props.weather)}
                {this.props.weather.map((weather, idx) => {
                    return (
                    <div id="current-weather" key={idx}>
                    <h1 id="city-name">{weather.name}</h1>
                    <h3>Today's Forecast: {this.capitalizeString(weather.weather[0].description)}</h3>
                        <div id="current-temps">
                            <p>Current Temperature: {Math.round(weather.main.temp)}°</p>
                            <p>Feels like: {Math.round(weather.main.feels_like)}°</p>
                            <p>Today's High: {Math.round(weather.main.temp_max)}°</p>
                            <p>Today's Low: {Math.round(weather.main.temp_min)}°</p>
                            

                        </div>
                    </div>
                    )
                })}
            </>
        )
    }
}

export default CurrentWeather