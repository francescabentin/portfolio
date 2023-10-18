import '../styles/Projects.scss';
import proyecto1 from '../images/proyecto1.png';
import proyecto2 from '../images/projecto2.png';
import proyecto3 from '../images/projecto3.png';
import proyecto4 from '../images/proyecto4.png';
import proyecto5 from '../images/projecto5.png';
import projecto6 from '../images/projecto6.png';
import projecto7 from '../images/proyecto7.png';
import projecto8 from '../images/projecto8.png';
import projecto9 from '../images/projecto9.png';
import Enlace from './BoxArrowRightIcon';
import iconGit from '../images/icon-git.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useState } from 'react';


function Projects() {

const [isHovered, setIsHovered] = useState(false);

const projectText = "< Projects >";

AOS.init({
  duration: 1500, 
  once: false, 
    offset: 200
});


    return (
          <div  className="projects">
            <h1 id="projectId" className={`projects__title ${isHovered ? "hovered" : ""}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {isHovered ? projectText : "Projects"}
      </h1>
            <ul className='projects__list' >

                <li className="projects-li"  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-offset="100">
                   
                    <img className="card-img" src={proyecto1} alt="landing page screenshot"></img>
                     <p className='title-project'>PRESENTATION CARDS CREATOR</p>
                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>   
                        <p className='tech'>Javascript</p>
                    </div>
                    
                    <div className='card-links'>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://francescabentin.github.io/presentation-cards/">
                            <Enlace  clase="icon-web"/>
                        </a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/francescabentin/presentation-cards"><img src={iconGit} className="icon-git" alt="git link" />
                        </a>
                    </div>
                </li>

                <li className="projects-li"  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-offset="100">
                   
                    <img className="card-img" src={proyecto2} alt="landing page screenshot"></img>
                     <p className='title-project'>HANGMAN GAME</p>
                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>
                        <p className='tech'>Javascript</p>
                        <p className='tech'>React</p>
                    </div>
                    <div className='card-links'>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://francescabentin.github.io/hangman-game-project/">  <Enlace  clase="icon-web"/></a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/francescabentin/hangman-game-project"><img src={iconGit} className="icon-git" alt="git link" /></a>
                    </div>
                </li>

                <li className="projects-li"  data-aos="fade-up">
                    <img className="card-img" src={proyecto3} alt="landing page screenshot"></img>
                      <p className='title-project'>PROJECTS DATA BASE API</p>
                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>
                        <p className='tech'>Javascript</p>
                        <p className='tech'>React</p>
                         <p className='tech'>Node.js</p>
                          <p className='tech'>Sql</p>
                    </div>
                    <div className='card-links'>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://canelo-projects.onrender.com/">  <Enlace  clase="icon-web"/></a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/francescabentin/ProjectDataBase-Api
                        "><img src={iconGit} className="icon-git" alt="web link" /></a>
                    </div>
                </li>

                <li className="projects-li"  data-aos="fade-up">
                  
                    <img className="card-img" src={proyecto4} alt="landing page screenshot"></img>
                      <p className='title-project'>COCTAIL FINDER</p>
                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>
                        <p className='tech'>Javascript</p>
                    </div>
                    <div className='card-links'>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://francescabentin.github.io/CoctailFinder-project/">  <Enlace  clase="icon-web"/></a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/francescabentin/CoctailFinder-project"><img src={iconGit} className="icon-git" alt="git link" />
                        </a>
                    </div>
                </li>

                <li className="projects-li">
                    
                    <img className="card-img" src={proyecto5} alt="landing page screenshot"></img>
<p className='title-project'>BURGUER-RESTAURANT WEBSITE</p>
                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >SASS</p>
                        <p className='tech'>Javascript</p>
                    
                    </div>
                    <div className='card-links' >
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://francescabentin.github.io/burguer-website/">  <Enlace  clase="icon-web"/></a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/francescabentin/burguer-website"><img src={iconGit} className="icon-git" alt="git link" /></a>
                    </div>
                </li>

                <li className="projects-li"   data-aos="top-center">
               
                    <img className="card-img" src={projecto6} alt="landing page screenshot"></img>
 <p className='title-project'>HARRY POTTER FAN PAGE</p>
                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>
                        <p className='tech'>Javascript</p>
                    </div>

                    <div className='card-links'>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://francescabentin.github.io/CoctailFinder-project/">  <Enlace  clase="icon-web"/></a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/francescabentin/CoctailFinder-project"><img src={iconGit} className="icon-git" alt="git link" /></a>
                    </div>
                </li>
                <li className="projects-li" data-aos="fade-up-right">
                  
                    <img className="card-img" src={projecto7} alt="landing page screenshot"></img>
                      <p className='title-project'>ABOUT US WEBSITE</p>
                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>
                        <p className='tech'>Sass</p>
                    </div>
                    <div className='card-links'>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://francescabentin.github.io/diverlopers-teamProject-1/">  <Enlace  clase="icon-web"/>
                        </a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/francescabentin/diverlopers-teamProject-1"><img src={iconGit} className="icon-git" alt="git link" />
                        </a>
                    </div>
                </li>
                <li className="projects-li"  data-aos="fade-left">
                    
                    <img className="card-img" src={projecto8} alt="landing page screenshot"></img>
                    <p className='title-project'>BRAND PUBLICITY LAYOUT</p>
                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>
                        <p className='tech'>Sass</p>
                    </div>
                    <div className='card-links'>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://francescabentin.github.io/simple-website-with-Hero-and-Menu/">  <Enlace  clase="icon-web"/>
                        </a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/francescabentin/simple-website-with-Hero-and-Menu"><img src={iconGit} className="icon-git" alt="git link" />
                        </a>
                    </div>
                </li>
                <li className="projects-li"  data-aos="fade-up">
                    <img className="card-img" src={projecto9} alt="landing page screenshot"></img>
                    <p className='title-project'>GOOGLE WEBSITE COPY</p>
                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>
                        <p className='tech'>Sass</p>
                    </div>
                    <div className='card-links'>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://francescabentin.github.io/googleclone/">  <Enlace  clase="icon-web"/>
                        </a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/francescabentin/googleclone"><img src={iconGit} className="icon-git" alt="git link" />
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Projects; 