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
         
        
          I started on this web development journey because I absolutely 🚀 love  technology. Whether it's writing code, creating cool designs, or solving tech puzzles, I enjoy every bit of web development. Thanks to my solid business 🏢 background, gained while working with big companies like Kimberly-Clark, I'm good at connecting business needs with tech solutions. That means I can build websites that not only look great but also make smart business sense. 
        </p>
        <br />
        <p   >
          I'm from Peru, and I embrace 🌍 diversity. I speak both English and Spanish, so I can connect with people all around the world. I take pride in my academic achievements, graduating in the top 10% of my class. I decided to follow my ❤️ and went through the <a className="a " rel="no follow no referer" target="_blank" href="https://adalab.es/"> <span className="enlace">Adalab boot camp</span></a> to fine-tune my skills. You can see my work in the portfolio on this site   {" "}
          <AnchorLink offset={() => 100} href="#projectId" className="a enlace">
            below {" "}
          </AnchorLink>, where I've crafted user-friendly and eye-catching web experiences. If you're in need of a passionate, hardworking developer, check out my projects and let's  {" "}
          <AnchorLink offset={() => 100} href="#contactId" className="a enlace">
            chat{" "}
          </AnchorLink> about how we can work together on your web development goals.
        
        </p>
        </div>
      </div>
      </div>

  );
}

export default Introduction;
