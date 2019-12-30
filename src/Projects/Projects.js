import React from "react"
import DBM from "./pages/DBM.js"
import Spam from "./pages/Spam.js"
import Rubiks from "./pages/Rubiks.js"

import { BrowserRouter, Route } from 'react-router-dom';

import Thumbnail from '../Thumbnail.js'; // Import the Thumbnail component
import dembeat from './images/dembeat.png'
import spammusic from './images/Spam.png'
import rubiksThumb from './images/rubiks-thumb.png'

import '../App.css';
import './Projects.css'

function Projects(props) {
  return (
    <BrowserRouter>
    <div>
    <Route path="/projects/dbm" component={DBM} />
    <Route path="/projects/spam" component={Spam} />
    <Route path="/projects/rubiks" component={Rubiks} />
      <h1>Check out my projects!</h1>
      <div className ="project-thumbs">
      <Thumbnail
        link="/projects/dbm"
        image={dembeat}
        title="Democratic Beat-Making"
        category="HTML, CSS, Javascript, NodeJS"
        className="project-link"
      />
      <Thumbnail
        link="/projects/spam"
        image={spammusic}
        title="Spam Music Bot"
        category="Max/MSP, NodeJS"
        className="project-link"
      />
       <Thumbnail
        link="/projects/rubiks"
        image={rubiksThumb}
        title="Pseudo-Rubiks Cube"
        category="HTML, CSS, Javascript"
        className="project-link"
      />
      </div>
      
    </div>
    </BrowserRouter>
  )
}
 
export default Projects;