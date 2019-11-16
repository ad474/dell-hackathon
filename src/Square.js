import React, { Component } from 'react';
import "./App.css";
//import Header from "./Header.js";
import Draggable from 'react-draggable';

export default class Square extends Component{
    state={term:''};
    onFormSubmit=(event)=>{
        event.preventDefault();
        //console.log(this.state.term);
        this.props.onSubmit(this.state.term);
        //console.log(this.state.term);
    };
    render(){
        return(
        <div>
            {/* <Header/> */}
            <Draggable>
                <div className="box">
                {/* {this.state.showComponentSquare ?
                    <Square /> :(

                    )
                    
                } */}
                {/* {
                    if({this.state.term}){
                        <p>{this.state.term}</p>
                    }
                    else{
                        <form onSubmit={this.onFormSubmit} className="field">
                        <input type="text" value={this.state.term} onChange={(e)=>{this.setState({term:e.target.value})}} />
                      </form>
                    }
                } */}
                
                </div>
            </Draggable>
            {/* <script src="js/jquery.js" type="text/javascript"></script>
            <script src="jqueryui/jquery.ui.js" type="text/javascript"></script>
            <script>
                $(".box").draggable();
            </script> */}
        </div>
        
        );
    }
}