import React from "react";
import {Helmet} from "react-helmet";
 
export default class Header extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="jqueryui/jquery-ui.css"></link>
                <link rel="stylesheet" href="jqueryui/jquery-ui.structure.css"></link>
                <link rel="stylesheet" href="jqueryui/jquery-ui.theme.css"></link>

            </Helmet>
        </div>
    );
  }
};