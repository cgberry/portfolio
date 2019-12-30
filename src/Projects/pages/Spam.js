import React from "react"

import spamimg from '../images/Spam.png'
import git from '../images/git.png'

import '../../App.css';
import '../Projects.css'

class Spam extends React.Component {
  componentWillMount(){
    window.scrollTo(0, 0);
  }
  render(props){
  return (
    <div>
    <h1>Spam Music Bot</h1>
    <div className = "project-container">
      <img src = {spamimg} className = "project-img" id = "spam-img"  alt="Project"></img> 
      <div className = "text-container">
      <div className = "description">
        <h2>Description</h2>
        <p>
        Taking inspiration from Twitch Plays, Spam Music Bot is a
        project where users send messages to a bot in their Discord
        chatroom. That bot sends messages to a sound program that 
        controls a series of looping beats and tracks. This was the
        first project in a series of projects exploring the ideas of
        crowd-decision making and democratically coordinating musical
        decisions.
        </p>
      </div>
      <div className = "tech-tree">
        <h2>Tech</h2>
      <ul>
        <li>
        Sound: Max/MSP
        </li>
        <li>
        Back-end: NodeJS
        </li>
      </ul>
      </div>
      </div>
      <div className ="thumbs">
        <h3>Check it out below!</h3>
        <a href="https://github.com/cgberry/SpamMusicBot" target = "_blank" rel="noopener noreferrer">
          <img src={git} className ="thumbimg"  alt="Github Thumb"></img>
        </a>
      </div>
    </div>
  </div>
  )
  }
}
 
export default Spam;