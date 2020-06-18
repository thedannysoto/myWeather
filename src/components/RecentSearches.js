import React, { Component } from 'react';

class RecentSearches extends Component {

    handleOnClickList = (event) => {
        this.props.addUrl(event.target.value);
        this.props.fetchCurrentWeather();
    }

    render() {
        

        return(
            <ul id="search-list">
            {this.props.searches.map((search, idx) => {
                return <li key={idx} className="list-items" value={search.zip} onClick={this.handleOnClickList}>{search.city}</li>
            })}
            </ul>
        )
            
    }

}

export default RecentSearches;