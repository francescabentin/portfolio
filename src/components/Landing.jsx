import "../styles/Landing.scss";
import { Link } from "react-router-dom";
import imageLanding from "../images/avatar.jpg";
import StarfieldEffect from "./StarfieldEffect";
import resume from "../downloads/resume.pdf";
import Zoom from "react-reveal/Zoom";
import phrases from "../data/nombres.json";
import { useEffect, useState } from "react";



function Landing() {

  const [word, setWord] = useState("Dive In");
  
  const downloadResume = () => {
     const link = document.createElement("a");
    link.href = resume; 
    link.target = "_blank";
    link.download = "Cv-FrancescaBentin"; 
    link.click();
  };

useEffect(() => {
  const fetchData = async () => {
    try {
      const phrasesArray = phrases.phrases;
      const randomIndex = Math.floor(Math.random() * phrasesArray.length);
      const selectedWord = phrasesArray[randomIndex];
      setWord(selectedWord);
      console.log(selectedWord);
    } catch (error) {
      console.error("An error occurred while setting the word:", error);
      setWord('Dive In')
    }
  };

  fetchData();
}, []);
 



  return (
    <Zoom>
    <div className="landing">
      <StarfieldEffect />
      <div className="landing__intro">
        <h2 className="landing__intro__title">Hi, I am Francesca Bentin</h2>
        <p className="landing__intro__span"> Front End Developer</p>
        <img
          className="landing__intro__image"
          src={imageLanding}
          alt="avatar"
        />
       
         
    
            <div className="installer" onClick={downloadResume}>
              <label for="progressLinux">
                <input id="progressLinux" type="radio" /> <span></span>
              </label>
            </div>
       
   
       
      </div>
      
      <button className="landing__button">
        <Link to="/Principal">{word}</Link>
      </button>
    </div>
    </Zoom>
  );
}

export default Landing;
