import React, { Component } from 'react';

class ZipInput extends Component {

    constructor() {
        super();
        this.state = {
            zip: null,
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
        }

    }

    render() {
        const {errors} = this.state;

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
            </div>
        )
    }

}

export default ZipInput;