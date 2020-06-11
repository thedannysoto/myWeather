import React, { Component } from 'react';

class ZipInput extends Component {

    constructor() {
        super();
        this.state = {
            zip: ''
        }
    }

    handleOnChange(event) {
        this.setState({
            zip: event.target.value
        })
    }

    handleOnSubmit(event) {
        event.preventDefault();
        this.props.fetchCurrentWeather(this.state.zip);
        this.setState({
            zip: ''
        })
    }

    render() {

        return(
            <div id="zip-input-container">
                <form onSubmit={ (event) => this.handleOnSubmit(event) }>
                    <input 
                        type="text"
                        value={this.state.zip}
                        onChange={ (event) => this.handleOnChange(event) } />
                    <input type="submit" />
                </form>

            </div>
        )
    }

}

export default ZipInput;