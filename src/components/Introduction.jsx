import "../styles/Introduction.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState,useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";


function Introduction() {

 
  const [isHovered, setIsHovered] = useState(false);
  const projectText = "< About Me />";



  useEffect(() => {
    AOS.init(); 
  }, []);

  
  return (
    <div id="aboutmeId" className="introduction">
      <h1
        className={`title ${isHovered ? "hovered" : ""}`} 
         onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {" "}
        {isHovered? projectText : "About Me"}
        
      </h1>

      <div className="text" >
        <div data-aos="fade-up">
     <p  >
         
     Front-End Developer with a UX focus and nearly 2 years of experience in web development and user experience. Strong
commercial background in multinational companies. Trained in 2023 through an intensive ME(R)N full-stack bootcamp.
Currently at NFQ Solutions, implementing banking features with Vue.js 2 & 3 and collaborating with interdisciplinary
teams (backend, design, QA).Currently working with React and Spring Boot. Recently started a Java SE 11 programming course.
          I started on this web development journey because I absolutely 🚀 love  technology. Whether it's writing code, creating cool designs, or solving tech puzzles, I enjoy every bit of web development. Thanks to my solid business 🏢 background, gained while working with big companies like Kimberly-Clark, I'm good at connecting business needs with tech solutions. 
        </p>
        <br />
        <p   >
          I'm from Peru, and I embrace 🌍 diversity. I speak both English and Spanish, so I can connect with people all around the world. I take pride in my academic achievements, graduating in the top 10% of my class. I decided to follow my ❤️ and went through the <a className="a " rel="no follow no referer" target="_blank" href="https://adalab.es/"> <span className="enlace">Adalab boot camp</span></a> to fine-tune my skills. 
        </p>
        </div>
      </div>
      </div>

  );
}

export default Introduction;
