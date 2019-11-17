import React, {Component} from 'react';
import "./logint.css";
 
export default class LoginTemplate extends Component{
    constructor(props){
        console.clear();
        super(props);
        this.state = {
            counter:1
        }
        
    }
    buttonclick() {
        
        this.setState({
            counter:this.state.counter+1
            //componentsArray: this.state.componentsArray.concat("Button")
        });
        console.log(this.state.counter);
        
    }
    render(){
        return(
            <div className="fixoverflow">
                <div className="bg">
                {this.props.rendercomponents}
                    <div className="signin">
                        <h1 className = 'siLbl'>Sign In</h1>
                        <br/> <br/>
                        <label className = 'lbl'>Username</label>
                        {' '}
                        <input type = 'text'/>
                        <br/> <br/>
                        <label className = 'lbl'>Password</label>
                        {' '}
                        <input type = 'password'/>
                        <br/> <br/><br/>
                        <button className = 'siBtn' onClick={this.buttonclick}> Sign In </button>
                    </div>
                </div>
            </div>
        );
    }
}