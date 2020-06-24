import React, { Component } from 'react';

class RecentSearches extends Component {


    render() {
        

        return(
            <ul id="search-list">
            {this.props.searches.map((search, idx) => {
                return <li key={idx} className="list-items" value={search.location} onClick={this.props.handleOnClick}>{search.location}</li>
            })}
            </ul>
        )
            
    }

}

export default RecentSearches;