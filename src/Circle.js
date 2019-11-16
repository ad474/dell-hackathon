import React, {Component} from 'react';
import Draggable from 'react-draggable';
import "./App.css";

export default class Circle extends Component{
    render(){
        return(
            <Draggable>
                <div className="circle"></div>
            </Draggable>
            
        );
    }
}