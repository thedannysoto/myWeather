import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {

    render() {
        

        return(
            <div id="home">
                <button id="home-button"><NavLink to="/weather" exact className="link" >Look Up Weather</NavLink></button>
            </div>
        )
    }

}

export default Home;