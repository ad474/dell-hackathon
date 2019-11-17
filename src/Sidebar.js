import React, {Component} from 'react';
import './App.css';

export default class Sidebar extends Component{
    constructor(props){
        console.clear();
        super(props);
        this.state = {
            componentsArray:[]
        }
    }
    render(){
        return(
            <div class="sidebar">
                <button onClick="">Button</button>
                <button onClick="">H1</button>
                <button onClick="">H2</button>
                <button onClick="">Textfield</button>
            </div>
        );
    }
}