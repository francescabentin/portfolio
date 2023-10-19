import '../styles/Contact.scss';
import github from '../images/github2.png';
import linkedin from '../images/linkedin2.png';
import twitter from '../images/twitter2.png';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

function Contact(props) {
  const [state, handleSubmit] = useForm("xrgwlqoy");
 console.log(state.succeeded);

 const [isHovered, setIsHovered] = useState(false);
const projectText = "< Contact />";



  return (
    <div  className="contact">
      <h2 className={`title-contact ${isHovered ? "hovered" : ""}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>  {isHovered ? projectText : "Contact"} </h2>
      <div id="contactId" className='container'>
        <div  className='form-container'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input className='input-1 '
              id="name"    
              type="name"
              name="name"
              placeholder='Name'
            />
            <label htmlFor="email"></label><input className='input-1   '
              id="email"
              type="email"
              name="email"
              placeholder='Email'
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder='Your Message'
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button className='submit' type="submit" disabled={state.submitting}>Send</button>
          </form>
        
            <p className='message'>{ state.succeeded ? 'Thank you for your message!' : "" }</p>
         
        </div>
        <div className='container-links'>
          <div className={`list-links   `}>
            <a
              className='links-contact'
              target="_blank"
              rel="noopener noreferrer"
              href='https://www.linkedin.com/in/francescabentin'
            >
              <img className='icon icon-linkedin' src={linkedin} alt="Logo Linkedin" />
            </a>
            <a
              className='links-contact'
              target="_blank"
              rel="noopener noreferrer"
              href='https://github.com/francescabentin'
            >
              <img className='icon icon-github' src={github} alt="logo Github" />
            </a>
            <a
              className='links-contact'
              target="_blank"
              rel="noopener noreferrer"
              href='https://twitter.com/franbentin'
            >
              <img className='icon-twitter' src={twitter} alt="logo Twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
