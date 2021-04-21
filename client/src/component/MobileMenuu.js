import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade'


function MobileMenuu({setMenuOpen}) {

    return (
        <>
        <Fade top>
        <div className="side_drawer">
                
            <div className='side_drawer__menu_items'>
              <div onClick={()=>setMenuOpen(false)} className="side_drawer__item_border">
              <Link  to="/"> Home</Link>
              </div>
              
              <div  onClick={()=>setMenuOpen(false)} className="side_drawer__item_border">
              <Link className="contact" to="/contact"> Contact </Link>
              </div>
              
              <div onClick={()=>setMenuOpen(false)} className="side_drawer__item_border">
              <Link  to="/resume"> Resume</Link>
              </div>
              
              <div onClick={()=>setMenuOpen(false)} className="side_drawer__item_border">
              <Link className="project" to="/projects"> Projects</Link>
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
          </Fade>
          
        </>
       )
}

export default MobileMenuu
