import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'

class Resume extends Component {

  componentDidMount(){
    window.scroll(0, 0)
  }

  render() {
    return (
      <div className="resume">
        <Slide bottom>
        <div className="title">
        <h2 >Resume.</h2>
        </div>
        <button> DownLoad CV</button>
        </Slide>
        <Slide bottom>
        <h3 className="resume__experience">Experience</h3>
         <div className="resume__card">
          
          <div className="resume__date">
            <h4 className="resume__date__info">2020-2021</h4>
            <h6>Software Engineer</h6>
            <p>Kola Technologies </p>
            <p>Lagos, NG</p>
          </div>
          <div className="resume__space"></div>
          <div className="resume__info resume__info__li_spacing">
            <ul>
              <li>
              It was a pleasure for me to build the company's first and only website. Which is used by may people.
              </li>
              <li>
              I was in charge of maintaining the code base and also making sure that the database is working properly.
              </li>
              <li>
                I was able to also write some script that automated some tasks in the office using Python. For e.g fetching the daily changes in the database and sending it to the Boss phone at the end of every day work.
              </li>
            </ul>
          </div>
         </div>
         <h3>Education</h3>
         <div className="resume__card">

         <div className="resume__date">
            <h4 className="resume__date__info">2012-2018</h4>
            <h6>Ebony State University</h6>
            <p>Bachelors of Arts, History and International Relations </p>
            <p>Ebonyi State, NG</p>
          </div>
          <div className="resume__space"></div>
          <div className="resume__info resume__info__margin">
            <p className="resume__info__relevant__courses">Relevant Coursework: </p>
            <ul>
              <li>
              Introduction to Computer Science
              </li>
              <li>
              Computer Application to History
              </li>
              <li>
              
              Elementary French 
              </li>
              <li>
              Evolution of Diplomacy
              
              </li>
            </ul>
          </div>
         </div>

         <div className="resume__card">

         <div className="resume__date">
            <h4 className="resume__date__info">2018-2020</h4>
            <h6>Genetics Computer School, </h6>
            <p>International Diploma in Software Development </p>
            <p>Bedok, Singapore</p>
          </div>
          <div className="resume__space"></div>
          <div className="resume__info resume__info__margin">
            <p className="resume__info__relevant__courses">Relevant Coursework: </p>
            <ul>
              <li>
              Object-Oriented Programming and Design.
              </li>
              <li>
              Data Structures and Algorithms Specialization 
              </li>
              <li>
              Calculus II
              </li>
              <li>
              
              Database Design and Implementation
              </li>
              <li>
              
              Understanding General Software Development
              </li>
            </ul>
          </div>
         </div>

         
         <h3>Technical Skill </h3>
         <div className=" resume__skill resume__card">
         <div className="resume__skill">
          <ul>
           
           
            <li>
              React.js
            </li>
            <li>
              CSS, SASS
            </li>
            <li>
              Python
            </li>
            <li>
              HTML
            </li>
            <li>
              Javascript
            </li>
          </ul>
         </div>
         <div className="resume__skill">
         <ul>
            <li>
              Node.js
            </li>
            <li>
              Express.js
            </li>
            <li>
              Docker
            </li>
            <li>
              MongoDB
            </li>
            <li>
              PostgreSQL
            </li>
          </ul>
         </div>
         </div>

         <h3>Hobbies</h3>
         <div className=" resume__skill resume__card">
         <div className="resume__skill">
          <ul>
           
            <li>
              Indoor Activities
            </li>
            <li>
              I enjoy Cooking but not all the time
            </li>
            <li>
              Sports Addict (football)
            </li>
           
          </ul>
         </div>
         <div className="resume__skill">
         <ul>
            <li>
              Reading and Learning new ideas
            </li>
            <li>
              I love Music
            </li>
            <li>
              I love to Swim
            </li>
            <li>
             Playing Chess Game
            </li>
            
          </ul>
         </div>
         </div>
         </Slide>
      </div>
    )
  }
}

export default Resume
