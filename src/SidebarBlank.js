import React, {Component} from 'react';
import './App.css';
import BlankTemplate from './BlankTemplate';
import Draggable from 'react-draggable';

export default class Sidebar extends Component{
    // state={
    //     componentsArray:[]
    // };
    constructor(props){
        console.clear();
        super(props);
        this.state = {
            componentsArray:[]
        }
        this.buttonclick = this.buttonclick.bind(this);
        this.h1click = this.h1click.bind(this);
        this.h2click = this.h2click.bind(this);
        this.tfclick = this.tfclick.bind(this);
        //this._onButtonClick2 = this._onButtonClick2.bind(this);
    }
    buttonclick() {
        
        this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Draggable>
                    <button type="button">
                Click Me!
            </button>
                </Draggable>
            
            )
        });
        console.log(this.state.componentsArray);
        
    }
    h1click() {
        this.setState({
            componentsArray: this.state.componentsArray.concat(
                <Draggable>
                    <h1>
                H1
            </h1>
                </Draggable>
            )
        });
        console.log(this.state.componentsArray);
    }
    h2click() {
        this.setState({
            componentsArray: this.state.componentsArray.concat(
            <Draggable><h2>H2</h2></Draggable>
            )
        });
        console.log(this.state.componentsArray);
      }
      tfclick() {
        this.setState({
            componentsArray: this.state.componentsArray.concat(
            <Draggable><input type="text" name="fname" autoComplete="off"/></Draggable>
            )
        });
        console.log(this.state.componentsArray);
      }
    render(){
        return(
            <div class="fixoverflow">
                <div class="sidebar">
                    <button onClick={this.buttonClick}>Button</button>
                    <button onClick={this.h1click}>H1</button>
                    <button onClick={this.h2click}>H2</button>
                    <button onClick={this.tfclick}>Textfield</button>
                    <br/>
                </div>
                <BlankTemplate rendercomponents={this.state.componentsArray}/>
            </div>
            
        );
    }
}