import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_inner">
        <div className="email">
        <h4>Email</h4>
        <p>okekesylvaline80@gmail.com</p>
        </div>
       <div>
       <h4>Follow</h4>
       <div className="social_link">
        <a 
         href="https://github.com/" className="link" > <i className="fab fa-github"></i></a>
        <a className="link" href="https://twitter.com/is_sylva" target="blank"> <i className="fab fa-twitter"></i></a>
        <a 
         href="https://www.linkedin.com/in/sylvaline-okeke-337545205?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWj9YnhS6SrS08lYf23PEDw%3D%3D" target="blank"> <i className="fab fa-linkedin-in"></i></a>
        <a className="link" href="https://www.instagram.com/todaywithsylva/" target="blank"> <i className="fab fa-instagram"></i></a>
        </div>
       
      </div>
      </div>
      </div>
    )
  }
}

export default Footer
