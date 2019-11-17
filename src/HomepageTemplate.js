import React, {Component} from 'react';
import "./homepaget.css";
// import Sidebar from './SidebarBlank';
 
export default class HomepageTemplate extends Component{
    render(){
        return(
            <div className="fixoverflow">
                {this.props.rendercomponents}
                <div>
  <div className="container">
  <nav class="navbar navbar-light bg-dark">
  <a class="navbar-brand" >Navbar</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>

<div className="jumbotron">
<h1> Hello World! </h1>
<p> This is a template for a simple marketing or informational website. </p>
<div className="tryresize"><button> Click Me! </button></div>

</div>

<div class="row">
<div class="col-lg-4 col-md-6 col-sm-6">
<div class="thumbnail">
    <img src=" https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450" className='images'/>

  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut leo nec velit finibus condimentum nec eget libero. Nulla sed turpis at lectus tempus tempus. Integer sed dignissim nisi, in venenatis libero. In eu consectetur metus. Suspendisse cursus suscipit tristique. Quisque suscipit molestie sapien, ut fringilla lorem dapibus id. Nulla posuere tincidunt nibh, id accumsan arcu rhoncus sed. Mauris in est et diam tempus iaculis.</p>
</div>
</div>
<div class="col-lg-4 col-md-6 col-sm-6">
<div class="thumbnail">
<img src="http://i.imgur.com/qK42fUu.jpg" className='images' />
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut leo nec velit finibus condimentum nec eget libero. Nulla sed turpis at lectus tempus tempus. Integer sed dignissim nisi, in venenatis libero. In eu consectetur metus. Suspendisse cursus suscipit tristique. Quisque suscipit molestie sapien, ut fringilla lorem dapibus id. Nulla posuere tincidunt nibh, id accumsan arcu rhoncus sed. Mauris in est et diam tempus iaculis.</p>

</div>
</div>
<div class="col-lg-4 col-md-6 col-sm-6">
<div class="thumbnail">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTRg9tf-twF4meci1UWQh0rAOowzymFDo0-neFY8FGw-3S7CGODQ&s" className='images'/>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut leo nec velit finibus condimentum nec eget libero. Nulla sed turpis at lectus tempus tempus. Integer sed dignissim nisi, in venenatis libero. In eu consectetur metus. Suspendisse cursus suscipit tristique. Quisque suscipit molestie sapien, ut fringilla lorem dapibus id. Nulla posuere tincidunt nibh, id accumsan arcu rhoncus sed. Mauris in est et diam tempus iaculis.</p>

</div>
</div>
</div>
</div>

</div>
            </div>
        );
    }
}