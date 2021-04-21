import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import Fade from 'react-reveal/Fade'

const Home = () => {

  
  const[isLoading, setLoading] = useState(true)

  useEffect(()=>{
    window.scroll(0, 0)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  })

    return (
    
        <React.Fragment>
        <div className="home">
        <div className="background">
        </div>
        
        <div className="content">
        <Fade left>
        <div className="img_info">
        <img src="/image/mee.jpg"/>
        
        <h3 className="img_info_name">Okeke Sylvaline</h3>
        <div className="line"></div>
        <h3 className="job">FULLSTACK DEVELOPER</h3>
        <div className="social_link">
        <a 
         href="https://github.com/" className="link" > <i className="fab fa-github"></i></a>
        <a className="link" href="https://twitter.com/is_sylva" target="blank"> <i className="fab fa-twitter"></i></a>
        <a 
         href="https://www.linkedin.com/in/sylvaline-okeke-337545205?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWj9YnhS6SrS08lYf23PEDw%3D%3D" target="blank"> <i className="fab fa-linkedin-in"></i></a>
        <a className="link" href="https://www.instagram.com/todaywithsylva/" target="blank"> <i className="fab fa-instagram"></i></a>
        </div>
        </div>
        </Fade>
        <Fade right>
        <div className="other_info">
          <h1>Hey!</h1>
          <div className="other_info_link">  <NavLink className="link_button button_color" to="/projects"> Projects</NavLink>
        <NavLink className="link_button" to="/resume"> Resume</NavLink></div>
        <p className="first_p">
        I'm Sylvaline, a FullStack Developer and Content Creator based in Abuja, NG.
        </p>
        <p> I enjoy programming in Python and Javascript applications as well as creating contents.</p>
        </div>
        </Fade>
        </div>
        </div>
      </React.Fragment>
     
    )
  }


export default Home
