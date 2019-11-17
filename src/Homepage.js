import React, {Component} from 'react';
// import MainContent from './MainContent';
// import Buttons from './Buttons';
import {Link} from 'react-router-dom';
 
export default class Homepage extends Component{
    render() {
        return (
            <div>
                
                {/* <div id="resizable">
                    <h1>ARE YOU EVEN WORKING</h1>
                </div> */}
                Is this even working?
                <Link to="/blanktemplate">Blank</Link>
                <br/>
                <Link to="/logintemplate">Login</Link>
                <br/>
                <Link to="/homepagetemplate">Homepage</Link>
                <br/>
                <Link to="/newslettertemplate">Newsletter</Link>
                <br/>
            </div>
        )
    }
}