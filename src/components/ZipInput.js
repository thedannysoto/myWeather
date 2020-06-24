import React, { Component } from 'react';
import LocationSearchInput from './LocationSearchInput';


class ZipInput extends Component {

    render() {

        return(
            <div id="zip-input-container">
              
                    <p id="zip-label">Enter Location: </p>
                <LocationSearchInput handleSelect={this.props.handleSelect} addLocation={this.props.addLocation} addUrl={this.props.addUrl} fetchCurrentWeather={this.props.fetchCurrentWeather}/>
            </div>
        )
    }


}

export default ZipInput;