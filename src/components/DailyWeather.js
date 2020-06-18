import React, { Component } from 'react'


class DailyWeather extends Component {

    capitalizeString(string) {
        return string.split(" ").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ")
    }

    componentDidMount(){
        this.props.addUrlTwo(this.props.coord);
        this.props.fetchDailyWeather();
        this.props.sendSearch();
    }


    render () {

        return(
            <div id="daily-weather" style={{display: "none"}}>
                
                {this.props.dailyWeather.map((weather, idx) => {
                    const day = new Date();
                    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    const weatherArray = [];
                    
                    for (let x = 1; x < weather.daily.length; x++) {
                        weatherArray.push(<p key={x}>{weekday[(day.getDay() + x) % 7]} - H: {Math.round(weather.daily[x].temp.max)}°, L: {Math.round(weather.daily[x].temp.min)}°, {this.capitalizeString(weather.daily[x].weather[0].description)}</p>)
                    }
                    return weatherArray;
              })}
            </div>
        )
    }
}

export default DailyWeather