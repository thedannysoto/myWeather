import React, { Component } from 'react'
import ZipInput from '../components/ZipInput';
import { fetchCurrentWeather, sendSearch } from '../actions/weatherActions'
import RecentSearches from '../components/RecentSearches';
import WeatherContainer from './WeatherContainer';

import { connect } from 'react-redux'

class ZipContainer extends Component {

    constructor() {
        super();
        this.state = ({
            loading: false
        })
    }

    updateState = () => {
        this.setState({
            loading: true
        })
    }

    render() {


        return(
            <div id="top-container">
                <ZipInput updateState={this.updateState} sendSearch={this.props.sendSearch} fetchCurrentWeather={ this.props.fetchCurrentWeather } addUrl={this.props.addUrl} zip={this.props.zip}/>
            <div id="recent-searches" style={{display: "none"}}>
                <h3>Recent Searches</h3>
                <RecentSearches zip={this.props.zip} addUrl={this.props.addUrl} fetchCurrentWeather={this.props.fetchCurrentWeather} handleOnClickList={this.handleOnClickList} searches={this.props.searches} />
            </div>
                <WeatherContainer />
            </div>
        )
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        addUrl: url => dispatch({ type: "ADD_URL", url }),
        fetchCurrentWeather: () => dispatch(fetchCurrentWeather()),
        sendSearch: () => dispatch(sendSearch())
    }
}

const mapStateToProps = state => {
    return {
        zip: state.zip,
        recent: state.recent,
        searches: state.searches
    }
}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(ZipContainer)