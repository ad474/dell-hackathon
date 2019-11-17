import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Switch,Link,Redirect} from 'react-router-dom';
import Homepage from './Homepage';
import BlankTemplate from './BlankTemplate';
import LoginTemplate from './LoginTemplate';
import HomepageTemplate from './HomepageTemplate';
import NewsletterTemplate from './NewsletterTemplate';
import NotFound from "./NotFound";

export default class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/blanktemplate" component={BlankTemplate}/>
                    <Route exact path="/homepagetemplate" component={HomepageTemplate}/>
                    <Route exact path="/logintemplate" component={LoginTemplate}/>
                    <Route exact path="/newslettertemplate" component={NewsletterTemplate}/>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/404" component={ NotFound }/>
                    <Redirect to="/404"/>
                </Switch>
            </Router>
        );
    }
}