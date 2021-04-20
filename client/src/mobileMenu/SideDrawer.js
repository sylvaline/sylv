import React from 'react'
import {NavLink} from 'react-router-dom'



function SideDrawer({isBtnOn}) {
  let side_drawer_animate  = 'side_drawer__menu_items'
  if(isBtnOn){
    side_drawer_animate  = 'side_drawer__menu_items open'
  }
  return (
   <React.Fragment>
     <div className="side_drawer">
      <div className={side_drawer_animate}>
        <div  className="side_drawer__item_border">
        <NavLink  to="/"> Home</NavLink>
        </div>
        
        <div   className="side_drawer__item_border">
        <NavLink className="contact" to="/contact"> Contact </NavLink>
        </div>
        
        <div  className="side_drawer__item_border">
        <NavLink  to="/resume"> Resume</NavLink>
        </div>
        
        <div className="side_drawer__item_border">
        <NavLink className="project" to="/projects"> Projects</NavLink>
        </div>
        <div className="side_drawer__menu_text">
          <h2>
            I'm fun to work with, <span>TRUST </span>
           Me..
          </h2>
        </div>
    </div>
    <div className="side_drawer__backdrop">
     
     </div>
    </div>
   </React.Fragment>
  )
}

export default SideDrawer
