import React from "react"

import dbm from '../images/dbm-work.png'
import git from '../images/git.png'
import eye from '../images/eye.png'

import '../../App.css';
import '../Projects.css'
 
class DBM extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(props){
    return (
        <div>
        <h1 >Democratic Beat-Making</h1>
        <div className = "project-container">
        <img src = {dbm} className = "project-img" id = "spam-img"  alt="Project"></img> 
        <div className = "text-container">
        <div className = "description">
            <h2>Description</h2>
            <p>
            Democratic Beat-Making (DBM) is a website where its partipants 
            collectively plan a musical composition. 
            Planning consists of the participants making their own 
            contributions to the composition by creating pitch patterns 
            and adjusting timbral parameters. Users can vote on contributions
            and then perform together by coordinating button presses. The goal of DBM is to 
            demonstrate how a piece of music can be planned collectively 
            by a group of potentially hundreds of people. The deeper goal 
            is to posit the idea that if the direction of piece of music 
            can be collectively and democratically decided, so can a whole society.
            </p>
        </div>
        <div className = "tech-tree">
            <h2>Tech</h2>
        <ul>
            <li>
            Front-end: HTML, CSS, Javascript, P5js, ToneJS
            </li>
            <li>
            Back-end: NodeJS, Heroku
            </li>
        </ul>
        </div>
        </div>
        <div className ="thumbs">
            <h3>Check it out below!</h3>
            <a href="https://github.com/cgberry/DemocraticBeatMaking" target = "_blank" rel="noopener noreferrer">
            <img src={git} className ="thumbimg"  alt="Github Thumb"></img>
            </a>
            <a href="http://democraticbeatmaking.herokuapp.com" target = "_blank" rel="noopener noreferrer">
            <img src={eye} className ="thumbimg"  alt="Live Website"></img>
            </a>
        </div>
        </div>
        </div>
    )
    }
}
 
export default DBM;