import React, {Component} from 'react';
import Sidebar from './Sidebar';
 
export default class BlankTemplate extends Component{
    render(){
        return(
            <div class="fixoverflow">
                <Sidebar/>
                <p>Blank</p>
            </div>
        );
    }
}