import React, {Component} from 'react';
// import MainContent from './MainContent';
// import Buttons from './Buttons';
import {Link} from 'react-router-dom';

export default class Homepage extends Component{

    render() {
        return (
<div className="contain">



          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>

              </ul>
            </div>
          </nav>
          <div className="bg">
          <h1 className="headers"> Creativity's humble abode </h1>
        <p className="headers"> Choose from a range of templates and personalise it as per your needs </p>

        <div class="row">
	<div class="col-lg-4 col-md-6 col-sm-6">
	<div class="thumbnail">
		<img src="http://i.imgur.com/qK42fUu.jpg" className="image_template"/>
	</div>
</div>
<div class="col-lg-4 col-md-6 col-sm-6">
	<div class="thumbnail">
		<img src=" http://i.imgur.com/qK42fUu.jpg" className="image_template" />
	</div>
</div>
<div class="col-lg-4 col-md-6 col-sm-6">
	<div class="thumbnail">
		<img src=" https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450
" className="image_template" />
	</div>
</div>
<div class="col-lg-4 col-md-6 col-sm-6">
<div class="thumbnail">
  <img src="http://i.imgur.com/qK42fUu.jpg" className="image_template"/>
</div>
</div>
<div class="col-lg-4 col-md-6 col-sm-6">
<div class="thumbnail">
  <img src="http://i.imgur.com/qK42fUu.jpg" className="image_template"/>
</div>
</div>
<div class="col-lg-4 col-md-6 col-sm-6">
<div class="thumbnail">
  <img src="http://i.imgur.com/qK42fUu.jpg" className="image_template"/>
</div>
</div>


</div>
          </div>

          </div>
        )
    }
}
