import React from "react"

import git from './images/git.png';
import linkedin from './images/LI-In-Bug.png'
import resume from './images/resume.png'

import ResumePDF from './resources/resume.pdf'

class Home extends React.Component {

  render(props){
  return (
    
    <div>
      <h1>Charles Gabriel (Gabe) Berry</h1>
      <h2>Software Engineer | Computer Musician | Teacher</h2>
      <div className ="thumbs">
        <a href="https://github.com/cgberry" target = "_blank" rel="noopener noreferrer">
          <img src={git} className ="thumbimg" alt="Github Thumb"></img>
        </a>
    
        <a href="https://www.linkedin.com/in/charles-berry-491ba151/" target = "_blank" rel="noopener noreferrer">
          <img src={linkedin} className ="thumbimg" alt="LinkedIn Thumb"></img>
        </a>
    
        <a href={ResumePDF} target = "_blank" rel="noopener noreferrer">
          <img src={resume} className ="thumbimg" alt="Resume Thumb"></img>
        </a>
      </div>
      <footer>Website built with React</footer>
       <footer> Background program built with p5js and Tonejs</footer>
    </div>
  )
}
}

 
export default Home;