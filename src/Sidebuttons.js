import React, { Component } from 'react';
import Square from "./Square";
import Circle from "./Circle";

export default class Sidebuttons  extends Component{
    constructor(props) {
        super(props);
        this.state = {
          showComponentSquare: false,
          showComponentCircle: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
        this._onButtonClick2 = this._onButtonClick2.bind(this);
      }
    
      _onButtonClick() {
        console.log("Clicked square");
        
        this.setState({
          showComponentSquare: true,
        });
      }
      _onButtonClick2() {
        this.setState({
          showComponentCircle: true,
        });
      }
    // handleClick(e){
    //     e.preventDefault();
    //     console.log("Clicked");
    // }
    render(){
        return(
            <div>
                <button onClick={this._onButtonClick}>Square</button>
                <button onClick={this._onButtonClick2}>Circle</button>
                {this.state.showComponentSquare ?
                    <Square /> :
                    null
                }
                {this.state.showComponentCircle ?
                    <Circle /> :
                    null
                }
            </div>
            
        );
    }
}