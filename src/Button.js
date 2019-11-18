import React,{Component} from 'react';
import Draggable from 'react-draggable';

export default class Jellybutton extends Component{
    render(){
        return(
            <div>
                <Draggable>
                <button>Hello world</button>
                </Draggable>
                
            </div>
        );
    }
}