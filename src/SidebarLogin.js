import React, {Component} from 'react';
import './App.css';
import LoginTemplate from './LoginTemplate';

export default class SidebarLogin extends Component{
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
            componentsArray: this.state.componentsArray.concat(<button>Button</button>)
        });
        console.log(this.state.componentsArray);
        
    }
    h1click() {
        this.setState({
            componentsArray: this.state.componentsArray.concat(<h1>H1</h1>)
        });
        console.log(this.state.componentsArray);
    }
    h2click() {
        this.setState({
            componentsArray: this.state.componentsArray.concat(<h2>H2</h2>)
        });
        console.log(this.state.componentsArray);
      }
      tfclick() {
        this.setState({
            componentsArray: this.state.componentsArray.concat(<input type="text">Textfield</input>)
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
                <LoginTemplate rendercomponents={this.state.componentsArray}/>
            </div>
            
        );
    }
}