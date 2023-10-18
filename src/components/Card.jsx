import Enlace from "./BoxArrowRightIcon";
import iconGit from "../images/icon-git.png";
import { useMotionValue, useTransform, motion } from "framer-motion";
import "aos/dist/aos.css";


function Card({ card }) {

  const baseUrl = "https://francescabentin.github.io/portfolio"

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [-30, 30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div style={{ perspective: 2000 }}>
          <motion.div
            style={{ x, y, rotateX, rotateY }}
            drag
            dragElastic={0.18}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            while={{ cursor: "grabbing" }}
            whileHover={{ rotateY: 40, rotateX: 20, rotateZ: -20 }}>
            <li
              className="projects-li"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-offset="100">
              <img
  className="card-img"
  src={`${baseUrl}/${card.image}`}
  alt="landing page screenshot"
/>
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