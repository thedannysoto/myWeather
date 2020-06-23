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

    constructor() {
        super();
        this.state = {
            zip: '',
            errors: {
                zip: ''
            }
        }
    }

    handleOnChange(event) {
        this.setState({
            zip: event.target.value
        })

        const validZipRegex = RegExp(/^[0-9]{5}$/);
        let errors = this.state.errors;
        errors.zip = validZipRegex.test(event.target.value) ? '': "Zip Code must be 5 numbers";
    }

    handleOnSubmit(event) {
        event.preventDefault();
        if (this.state.errors.zip.length > 0) {
            const errorDiv = document.getElementById("errors");
            errorDiv.style.display = "block";
        } else {
            this.props.addUrl(this.state.zip);
            this.props.fetchCurrentWeather();
            this.setState({
                zip: ''
            })
            const mainDiv = document.getElementById("main-container");
            mainDiv.style.display = "block";
            const searches = document.getElementById("recent-searches");
            searches.style.display = "block";
        }


    }


    render() {
        const {errors} = this.state;

        // const { isLoaded, loadError } = useLoadScript({
        //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        //     libraries,
        // });

        return(
            <div id="zip-input-container">
                <form onSubmit={ (event) => this.handleOnSubmit(event) }>
                    <label id="zip-label">Enter Zip Code: </label>
                    <input 
                        id="zip-input"
                        type="text"
                        value={this.state.zip}
                        onChange={ (event) => this.handleOnChange(event) } />
                    <input id="submit-button" type="submit" disabled={!this.state.zip} />
                </form>
                <div id="errors" style={{display: "none"}}>
                {errors.zip.length > 0 &&
                        <span className='error'>{errors.zip}</span>}
                </div>
                <LocationSearchInput />
                {/* <Search /> */}
            </div>
        )
        // function Search() {
        //     const {
        //         ready,
        //         value,
        //         suggestions: { status, data },
        //         setValue,
        //         clearSuggestion,
        //     } = usePlacesAutocomplete({});
            
        //     return (
        //         <Combobox onSelect={(address) => {console.log(address);}}>
        //               <ComboboxInput value={value} onChange={(e) => {
        //                   setValue(e.target.value);
        //               }}
        //               disabled={!ready}
        //               placeholder="Enter a location"
        //               />
        //               <ComboboxPopover>
        //                   {status === "OK" && data.map(({id, description}) => (
        //                       <ComboboxOption key={id} value={description} />
        //                   ))}
        //               </ComboboxPopover>
        //          </Combobox>
        //     )
        // }
    }


}

export default ZipInput;