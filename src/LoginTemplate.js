import React, {Component} from 'react';
import Sidebar from './Sidebar';
import "./logint.css";
 
export default class LoginTemplate extends Component{
    render(){
        return(
            <div className="fixoverflow">
                <Sidebar/>
                <div className="bg">
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
                        <button className = 'siBtn'> Sign In </button>
                    </div>
                </div>
            </div>
        );
    }
}