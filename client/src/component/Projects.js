import React, { Component } from 'react'

class Projects extends Component {

  componentDidMount(){
    window.scroll(0, 0)
  }

  render() {
    return (
      <div className="my_project"> 
        <div className="title">
        <h2 >Projects.</h2>
        </div>
        
        
        <h3 className="my_project__space"></h3>
         <div className="my_project__card">
          <div className="my_project__detail">
           <div className="my_project__detail__title">
           <h2>
              A Modern Blog Website
            </h2>
            <button>
            <a href="https://60770276f70f4535855ca83e--compassionate-volhard-155768.netlify.app" target="blank">
              Check it out
              </a>
              </button>
           </div>
           <h4>Description</h4>
           <p>I created a 101% mobile responsive modern blog site with a good authentication and token system to keep track of the logged in users, a user can save a post in favorite and read later, it also has both dark and light theme, it has a good comment system etc</p>
           <h4>Technology</h4>
           <p>React, Redux, Mongo DB, Express, JWT, Node, SCSS </p>
          </div>
         
          <div className="my_project__image">
           <img src="/image\Screenshot 2021-04-20 114735.jpg" alt="my_project image"></img>
           <img src="\image\Screenshot 2021-04-20 114808.jpg"></img>
          </div>
         </div>

         <div className="my_project__card">
          <div className="my_project__detail">
           <div className="my_project__detail__title">
           <h2>
            E commerce Website
            </h2>
            
            <button>
            <a href="http://swatchesmarket.herokuapp.com"  target="blank">
              Check it out
              </a>
              </button>
              
         
           </div>
           <h4>Description</h4>
           <p>This was an interesting project for me to build, let me explain lol! every project i work on is always interesting to me because it is an opportunity to learn and grow but this is very interesting because i used only Boostrap, no database, no backend. This was a frontend only project. It has Cart system, Filter, product details etc</p>
           <h4>Technology</h4>
           <p>React, Redux, Boostrap</p>
          </div>
         
          <div className="my_project__image">
           <img src="\image\Screenshot 2021-04-20 114902.jpg" alt="my_project image"></img>
           <img src="\image\Screenshot 2021-04-20 115824.jpg"></img>
          </div>
         </div>
         </div>
     
    )
  }
}

export default Projects
