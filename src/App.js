import React from 'react';
import brand from './img/img1.png'
import nav from './img/nav.png'
import main from './img/brand.png'
import './App.css';

function App() {
  return (
    <div className="App">
     <hr></hr>
   <nav className="navbar navbar-expand-lg">
  
        <img src={brand} className="img-fluid brand"></img><a className="navbar-brand" href="#"> <img src={nav} className="img-fluid brand nav"></img></a>
   <button className="navbar-toggler navbar navbar-light bg-lignt" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Why Vyorius?</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Solutions</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Product</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Use Cases</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Partner</a>
      </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
      </li>
    </ul>

    <div className ='button'>
    <button className="btn1  my-2 my-sm-0" type="submit">Launch Vyorius > </button>
    </div>

    
  </div>
   </nav>
   <hr></hr>
   <div className="container-fluid mainsection">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className ="content">
             <p className="small">CONNECTING THE DISCONNECTED</p>
             <h1><strong>Vyorius</strong> Vyorius brings unmanned robots <strong>together</strong> together,wherever they are</h1>
             <p>With all of the operations, commanding and maintenance tools in one place, unmanned vehicles will stay connected and productive no matter where you’re operating.</p>
             <div className="row row3">
                 <div className="col-12 col-md-6">
                 <button className="btn2 btn  my-2 my-sm-0" type="submit">Try Vyorius </button>
                 </div>
                 <div className="col-12 col-md-6 ">
                   <button className="btn2 btns  my-2 my-sm-0" type="submit">Learn More </button>
                 </div>
             </div>
              <p className='getstart'>Need to order a Delivery ? <a href="#">Get Started</a></p>
             </div>
          </div>
          <div className="col-12 col-md-6">
               <img src={main} className ="img-fluid banner"></img>
             </div>
        </div>
   </div>
    <hr></hr>
 </div>

  );
}

export default App;
