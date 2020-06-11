import React, { Component } from 'react'
import ZipInput from '../components/ZipInput';
import { fetchCurrentWeather } from '../actions/weatherActions'

import { connect } from 'react-redux'

class ZipContainer extends Component {

    render() {

        return(
            <div>
                <h1>My Weather</h1>
                <h3>Look up weather conditions in the U.S.</h3>
                <ZipInput fetchCurrentWeather={ this.props.fetchCurrentWeather }/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      weather: state.weather,
      loading: state.loading
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      fetchCurrentWeather: () => dispatch(fetchCurrentWeather())
    }
}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(ZipContainer)