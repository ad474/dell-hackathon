import React,{Component} from 'react';
//import Homepage from './Homepage';

export default class ButtonPrompt extends Component{
    // update = (e) => {
    //     this.props.onUpdate(e);
    // };
    // update(val){
    //     this.props.onUpdate(val);
    // }
    render(){
        return(
            <div class="buttonprompt">
                Choose the color 
                <button onClick={()=>this.props.onUpdate("blue")}>Blue</button>
                <button onClick={()=>this.props.onUpdate("green")}>Green</button>
                <button onClick={()=>this.props.onUpdate("yellow")}>Yellow</button>
                <button onClick={()=>this.props.onUpdate("red")}>Red</button>
            </div>
        );
    }
}
