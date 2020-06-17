import React, { Component } from 'react'
import ZipInput from '../components/ZipInput';
import { fetchCurrentWeather } from '../actions/weatherActions'

import { connect } from 'react-redux'

class ZipContainer extends Component {

    render() {

        return(
            <div id="top-container">
                <h1 id="my-weather">My Weather</h1>
                <h3 id="tag-line">Look up weather conditions in the U.S.</h3>
                <ZipInput fetchCurrentWeather={ this.props.fetchCurrentWeather } addUrl={this.props.addUrl} zip={this.props.zip}/>
            </div>
        )
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        addUrl: url => dispatch({ type: "ADD_URL", url }),
        fetchCurrentWeather: () => dispatch(fetchCurrentWeather())
    }
}

const mapStateToProps = state => {
    return {
        zip: state.zip
    }
}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(ZipContainer)