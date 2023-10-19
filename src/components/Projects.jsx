import "../styles/Projects.scss";
import Card from "./Card";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import projectsData from "../data/projects.json";



function Projects () {

  const [isHovered, setIsHovered] = useState(false);
  const [cards, setCards] = useState([]);

 useEffect(() => {
    setCards(projectsData);
  
  }, []);
  const projectText = "< Projects />";



  return (
  
    <div className="projects">
      <h1
        id="projectId"
        className={`projects__title ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} >
        {isHovered ? projectText : "Projects"}
     
      </h1>
    
    <ul className="projects__list">
  {cards.map((card, index) => (
    <div key={index}    style={{ perspective: 2000 }}>
      <Card card={card} />
    </div>
  ))}
</ul>

    </div>
   
  );
}

export default Projects;
