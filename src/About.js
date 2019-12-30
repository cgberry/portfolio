import React from "react"
import './App.css';

 
function About(props) {
  return (
    <div>
      <h1>About</h1>
      <div className = "about-container">
      <p>Charles Gabriel (Gabe) Berry is a software engineer based
        in Brooklyn, NY. Gabe got his start in coding by 
        writing audio patches in Max. Since then, he has pushed himself
        into larger ventures, teaching himself web development to create
        his projects.
      </p>
      <p>Gabe is currently teaching coding to elementary school and
        middle school students. He primarily teaches P5js, a Javascript 
        library. His goals are to teach the fundamentals of computer
        programming and inspire his students to make their own creative
        projects.
      </p>
      <p>In his freetime, Gabe likes to watch TV shows like Good
        Omens and play games like Breath of the Wild and Civilization. 
      </p>
    </div>
    </div>
  )
}
 
export default About;