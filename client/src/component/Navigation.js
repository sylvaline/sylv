import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from '../mobileMenu/MenuItem'


class Navigation extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="navigation">
        <MenuItem />
        <h3> <NavLink to="/"> <i className="fas fa-home"></i></NavLink></h3>
        <div className="nav_links">
        <NavLink activeClassName="active_link" exact className="contact" to="/"> Home </NavLink>
        <NavLink activeClassName="active_link" className="contact" to="/contact"> Contact </NavLink>
        <NavLink activeClassName="active_link" to="/resume"> Resume</NavLink>
        <NavLink activeClassName="active_link" className="contact" to="/projects"> Projects</NavLink>
        </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Navigation
