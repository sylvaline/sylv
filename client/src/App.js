import React, { useEffect, useState } from 'react';
import Home from './component/Home';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Resume from './component/Resume';
import Navigation from './component/Navigation';
import Footer from './component/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Loading from './component/Loading';


function App() {

   const[notting, setNotting] = useState('')
  const[isLoading, setLoading] = useState(true)

  useEffect(()=>{
    window.scroll(0, 0)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  }, [notting])


  return (
    <div>
        {
          isLoading ? <Loading/> :(<React.Fragment>
            <Navigation/>
            <div className="home">
            <Route exact path="/" component={Home}/>
            </div>
            
            <div className="resume">
            <Route exact path="/resume" component={Resume}/>
            </div>
    
            <div className="contact">
            <Route  exact path="/contact" component={Contact}/>
            </div>
    
            <div className="projects">
            <Route  exact path="/projects" component={Projects}/>
            </div>
            
            <div className="footer">
            <Footer/>
            </div>
    
          </React.Fragment>)
        }
      </div>
  );
}

export default App;
