import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ToogleButton from './mobileMenu/ToogleButton';
import MobileMenuu from './MobileMenuu';



function Navigation() {
  const[isMenuOpen, setMenuOpen] = useState(false)
    return (
      <React.Fragment>
        <div className="navigation">
        <div className="hamburger" onClick={()=>setMenuOpen(!isMenuOpen)}>
        <h4><i className="fas fa-bars"></i></h4>
        </div>
        <h3> <NavLink to="/"> <i className="fas fa-home"></i></NavLink></h3>
        <div className="nav_links">
        <NavLink activeClassName="active_link" exact className="contact" to="/"> Home </NavLink>
        <NavLink activeClassName="active_link" className="contact" to="/contact"> Contact </NavLink>
        <NavLink activeClassName="active_link" to="/resume"> Resume</NavLink>
        <NavLink activeClassName="active_link" className="contact" to="/projects"> Projects</NavLink>
        </div>
        </div>

        {
          isMenuOpen && <MobileMenuu setMenuOpen={setMenuOpen}/>
        }
      </React.Fragment>
    )
  }


export default Navigation
