import React from "react"

import rubiksImg from '../images/rubiks.png'
import git from '../images/git.png'
import eye from '../images/eye.png'

import '../../App.css';
import '../Projects.css'
 
class Rubiks extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(props){
    return (
        <div>
        <h1>Pseudo-Rubiks Cube</h1>
        <div className = "project-container">
        <img src = {rubiksImg} className = "project-img" id = "rubiks-img" alt="Project"></img> 
        <div className = "text-container">
        <div className = "description">
            <h2>Description</h2>
            <p>
            A "rubiks cube" made in 2D. It's more like a shuffle board 
            puzzle, but still fun! See how fast you can beat it!
            </p>
        </div>
        <div className = "tech-tree">
        <h2>Tech</h2>
        <ul>
            <li>
            Front-end: HTML, CSS, Javascript, P5js
            </li>
        </ul>
        </div>
        </div>
        <div className ="thumbs">
            <h3>Check it out below!</h3>
            <a href="https://github.com/cgberry/PseudoRubiks" target = "_blank" rel="noopener noreferrer">
            <img src={git} className ="thumbimg" alt="Github Thumb"></img>
            </a>
            <a href="https://editor.p5js.org/cgberry/present/al_86byY2" target = "_blank" rel="noopener noreferrer">
            <img src={eye} className ="thumbimg" alt="Live Website"></img>
            </a>
        </div>
        </div>
        </div>
    )
    }
}
 
export default Rubiks;