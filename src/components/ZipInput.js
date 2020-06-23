import React, { Component } from 'react';
import LocationSearchInput from './LocationSearchInput';
// import usePlacesAutocomplete, {
//     getGeocode,
//     getLatLng,
// } from 'use-places-autocomplete';
// import {
//     Combobox,
//     ComboboxInput,
//     ComboboxPopover,
//     ComboboxList,
//     ComboboxOption
// } from "@reach/combobox";

// const libraries = ["places"];

class ZipInput extends Component {

    render() {

        return(
            <div id="zip-input-container">
              
                    <p id="zip-label">Enter Location: </p>
                <LocationSearchInput />
            </div>
        )
    }


}

export default ZipInput;