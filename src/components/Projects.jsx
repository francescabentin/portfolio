import "../styles/Projects.scss";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import projectsData from "../data/projects.json";


function Projects () {

  const [isHovered, setIsHovered] = useState(false);
  const [cards, setCards] = useState([]);


 useEffect(() => {
    setCards(projectsData);
    console.log(projectsData);
  }, []);

  console.log(cards);
  const projectText = "< Projects />";

  AOS.init({
    duration: 1500,
    once: false,
    offset: 200,
  });



  return (
  
    <div className="projects">
      <h1
        id="projectId"
        className={`projects__title ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {isHovered ? projectText : "Projects"}
      </h1>
    <ul className="projects__list">
  {cards.map((card, index) => (
    <div key={index} style={{ perspective: 2000 }}>
      <Card card={card} />
    </div>
  ))}
</ul>
    </div>
   
  );
}

export default Projects;
