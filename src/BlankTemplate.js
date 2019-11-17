import React, {Component} from 'react';
import './App.css';
 
export default class BlankTemplate extends Component{
    render(){
        return(
            <div class="fixoverflow">
                <p>{this.props.rendercomponents}</p>
            </div>
        );
    }
}