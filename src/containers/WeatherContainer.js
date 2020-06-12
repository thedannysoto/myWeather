import React, { Component } from 'react'
import CurrentWeather from '../components/CurrentWeather';

import { connect } from 'react-redux'


class WeatherContainer extends Component {

    render() {

        return(
            <div>
                <CurrentWeather weather={this.props.weather} />
            </div>
        )
    }
}

const mapStateToProps = ({ weather }) => ({ weather })


export default connect(mapStateToProps)(WeatherContainer)