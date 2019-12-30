import React from 'react';

// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 



import Home from './Home/Home.js'; 
import Projects from './Projects/Projects.js'; 
import Music from './Music.js'; 
import About from './About.js'; 

//import Bouncer from './Home/js/Bouncer.js'
// import Sketch from '.Home/js/Sketch.js'

import './App.css';

function App (props){
 
  return (
    <BrowserRouter>
    <div className="App">
    <div id = "myCanvas"></div>
      <div className="navigation">
     
        <input type="checkbox"></input>
        <div className="navigation-sub">
          <Link to="/portfolio" className="item">Home</Link>
          <Link to="/portfolio/projects" className="item">Projects</Link>
          <Link to="/portfolio/music" className="item">Music</Link>
          <Link to="/portfolio/about" className="item">About</Link>
        </div>
      </div>
        <Route path="/portfolio" component={Home} />
        <Route path="/portfolio/projects" component={Projects} />
        <Route path="/portfolio/music" component={Music} />
        <Route path="/portfolio/about" component={About} />
        
    </div>
    </BrowserRouter>
        
  );
}

export default App;
