import Enlace from "./BoxArrowRightIcon";
import iconGit from "../images/icon-git.png";
import "../styles/Projects.scss";
import { useMotionValue, useTransform, motion } from "framer-motion";



function Card({ card }) {

  let boxVariants = {};
const isMobile = window.matchMedia("(max-width: 767px)").matches;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
 const rotateX = useTransform(y, [-100, 100], isMobile ? [0, 0] : [-30, 30]);
  const rotateY = useTransform(x, [-100, 100], isMobile ? [0, 0] : [-30, 30]);



  return (
    <div style={{ perspective: 2000 }}>
          <motion.div  
            style={{ x, y, rotateX, rotateY }}
            drag={!isMobile}
            dragElastic={0.18}
            variants={boxVariants}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            while={{ cursor: "grabbing" }}
              whileHover={{
          rotateY: isMobile ? 0 : 20,
          rotateX: isMobile ? 0 : 20,
          rotateZ: isMobile ? 0 : -20,
        }}>
            <li
              className="projects-li"
          >
              <div  className="card-img"   alt="landing page screenshot"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${card.image})`, backgroundSize:"cover", borderRadius: "20px 20px 0 0", height: "14rem",
  width: "100%",  backgroundPosition: "center"} }>

</div>
              <p className="title-project">{card.title}</p>
           <div className="project-techologies">
          {card.tech.map((tech, techIndex) => (
            <p key={techIndex} className="tech">
              {tech}
            </p>)
          )}
        </div>

              <div className="card-links">
                <a
                  className="links-projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={card.webLink}>
                  <Enlace clase="icon-web" />
                </a>
                <a
                  className="links-projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={card.gitLink}>
                  <img src={iconGit} className="icon-git" alt="git link" />
                </a>
              </div>
            </li>
          </motion.div>
        </div>
  );
}

export default Card;