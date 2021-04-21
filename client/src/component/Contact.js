import React, { useState, useEffect } from 'react'
import Slide from 'react-reveal/Slide'

function Contact() {

  useEffect(()=>{
    window.scroll(0, 0)
  }, [])

  const[info, setInfo] = useState({
    name : '',
    email : '',
    subject : '',
    message : ''
  })

  const [isSubmit, setSubmit] = useState(false)
  const [isSent, setSent] = useState(false)

  const handleChange = (e) =>{
    setInfo({...info, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    const {name, email, subject, message} = info

    if(!name || !email || !subject || !message) return false

    setSubmit(true)
    
    const newContact = {
      name,
      email,
      subject,
      message
    }

    console.log(newContact)

   
      setTimeout(()=>{
        setSubmit(false)
        setSent(true)
        setInfo({
          name : '',
          email : '',
          subject : '',
          message : ''
        })
      }, 3000)
   
  }

  

  return (
   
    <Slide bottom>
    <div className="contact_me"> 
   
      <div className="title">
      <h2 style={{width:'12em'}}>Contact Me.</h2>
      </div>
    
      <h3 className="contact_me__space"></h3>
       <div className="contact_me__card">

       <div className="contact_me__image">
         <h2>Why you will be happy to contact me</h2>
         <ul>
           <li>I can help you to fix bugs on your already existing website.</li>
           <li>I can create a FullStack projects for you.</li>
           <li>I'm very patient and understanding, so I will work with you untill you are satisfied.</li>
           <li>I can create a landing page for you to market your goods or for affiliate marketing.</li>
         </ul>
        </div>

        <div className="contact_me__detail">
           
      {
      isSent ? <div onClick={()=>setSent(false)} className="contact_sent"><h3>Message sent <span>x</span></h3></div> : ''
    }
         <form onSubmit={handleSubmit} >
        <div>
          <input type="text" name="name" value={info.name} onChange={handleChange} placeholder="Name:"/>
        </div>
        <div>
          <input type="email" name="email" value={info.email} onChange={handleChange} placeholder="Email:"/>
        </div>
        <div>
          <input type="text" name="subject" value={info.subject} onChange={handleChange} placeholder="Subject:"/>
        </div>
        <div>
        <textarea name="" name="message" value={info.message} onChange={handleChange} placeholder="Message" cols="30" rows="5"></textarea>
        </div>
        <div className="form__btn">
        <button>
          {
            isSubmit ? "Submitting..." : "Submit"
          }
        </button>
        </div>
         </form>
       
        </div>
       
       </div>
       </div>
       </Slide>
  )
}

export default Contact

