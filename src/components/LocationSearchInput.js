import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

class LocationSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({ address });
  };
 
  // handleSelect = address => {
  //   this.sendLocationData(address, this.props.fetchCurrentWeather);
  //   this.setState({ address: '' })
  // };

  // sendLocationData(address, fetchWeather) {
  //   geocodeByAddress(address)
  //   .then(results => {
  //       console.log(results[0].formatted_address);
  //       return getLatLng(results[0])
  //   })
  //   .then(latLng => {
  //       this.props.addLocation(address);
  //       this.props.addUrl(latLng)})
  //   .then(results => fetchWeather());
  // }

  render() {
      const searchOptions = {
          types: ['geocode']
      }
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.props.handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search...',
                className: 'location-search-input',
              })}
            />
            <div id="dropdown" className="autocomplete-dropdown-container">
              {loading && <div id="loading" style={{display: "none"}}>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#c8c8c8', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div className="search-option-div"
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span className="search-option">{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;