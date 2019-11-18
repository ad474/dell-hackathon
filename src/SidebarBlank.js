import React, {Component} from 'react';
import './App.css';
import BlankTemplate from './BlankTemplate';
import Button from "./Button";
import ButtonPrompt from './ButtonPrompt';
import Draggable from 'react-draggable';

export default class Sidebar extends Component{
    // state={
    //     componentsArray:[]
    // };
    constructor(props){
        console.clear();
        super(props);
        this.state = {
            componentsArray:[],
            buttonprompt:false,
            fieldVal: ""
        }
        this.onUpdate=this.onUpdate.bind(this);
        this.bclick = this.bclick.bind(this);
        this.h1click = this.h1click.bind(this);
        this.h2click = this.h2click.bind(this);
        this.tfclick = this.tfclick.bind(this);
    }
    // setbuttoncolor(color){
    //     this.setState({buttoncolor:color});
    //     console.log(this.state.buttoncolor);
    // }
    onUpdate = (val) => {
        console.log(val);
        this.setState({
          fieldVal: val
        })
        this.setState({
            buttonprompt:false
        });
        
    };
    bclick(){
        this.setState({
            buttonprompt:true
        });
        // this.setState({
        //     componentsArray: this.state.componentsArray.concat(
        //         <Button/>
        //     )
        // });
        // console.log(this.state.componentsArray);
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
                    <button onClick={this.bclick}>B</button>
                    <button onClick={this.h1click}>H1</button>
                    <button onClick={this.h2click}>H2</button>
                    <button onClick={this.tfclick}>Textfield</button>
                    <br/>
                    {this.state.buttonprompt ?
                    <ButtonPrompt onUpdate={this.onUpdate} />:
                    null
                    }
                    
                </div>
                <BlankTemplate rendercomponents={this.state.componentsArray}/>
            </div>
            
        );
    }
}