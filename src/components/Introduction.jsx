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
          Hello World!
          <br />
          <br />
          I've always been crazy about technology, and it's been a part of my
          life forever. After doing sales and marketing for a while, I finally
          took the plunge and turned my tech hobby into my dream job! Just
          finished up the <a className="a" href="https://adalab.es/">Adalab boot camp</a>, and
          now I'm all set to dive into web development. Check out my work, and I
          hope you'll love what you see! Can't wait to bring my passion to the
          table and make some awesome web pages together!
        </p>
        <br />
        <p   >
          To truly understand my abilities, I invite you to explore my{" "}
          <AnchorLink offset={() => 100} href="#projectId" className="a">
            projects{" "}
          </AnchorLink>
          , accessible through both GitHub repositories and their respective
          project websites. I welcome your visit and encourage you to reach out
          with any questions or suggestions you may have about my work or any
          other topics. You can also find links to my social media profiles in
          the{" "}
          <AnchorLink offset={() => 100} href="#contactId" className="a">
            'contact'{" "}
          </AnchorLink>
          section.
        </p>
        </div>
      </div>
      </div>

  );
}

export default Introduction;
