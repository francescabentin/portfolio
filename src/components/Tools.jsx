import '../styles/Tools.scss';
import { useState } from 'react';
import html from "../images/html.png";
import css from "../images/css.png";
import sass from "../images/sass (2).png";
import react from "../images/react.png";
import javascript from "../images/icons8-javascript-96.png";
import node from "../images/node.png";
import express from "../images/express.png";
import sql from "../images/sql.png";
import mongoDB from "../images/mongoDB.png";
import git from "../images/git.png";
import eslint from "../images/eslint.png";
import redux from "../images/redux.png";
import docker from "../images/docker.png";







function Tools() {
    const [isHovered, setIsHovered] = useState(false);

    const projectText = "< My Stack />";


    return (

        <div className="tools">
            <h1 id="ToolsId" className={`tools__title ${isHovered ? "hovered" : ""}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {isHovered ? projectText : "My Stack"}
            </h1>
            <section className='tools__stack'>

                <div className=" tools__stack__lista ">

                    <div className="element">
                                <h1 className="title">HTML</h1>
                                <img src={html} className="img" alt="HTML" />
                       
                    </div>
                     <div className="element">
                                <h1 className="title">CSS</h1>
                                <img src={css}className="img" alt="CSS" />
                       
                    </div>
                     <div className="element">
                                <h1 className="title">SASS</h1>
                                <img src={sass} className="img" alt="SASS"/>
                       
                    </div>
                     <div className="element">
                                <h1 className="title">JavaScript</h1>
                                <img src={javascript} className="img" alt="javascript" />
                       
                    </div>
                     <div className="element">
                                <h1 className="title">React</h1>
                                <img src={react}className="img" alt="react" />
                       
                    </div>
                     <div className="element">
                                <h1 className="title">Node Js.</h1>
                                <img src={node} className="img" alt="node"/>
                       
                    </div>
                          <div className="element">
                                <h1 className="title">Express Js.</h1>
                                <img src={express} className="img" alt="express js"/>
                       
                    </div>
                     <div className="element">
                                <h1 className="title">My Sql</h1>
                                <img src={sql} className="img" alt="sql" />
                       
                    </div>
                     <div className="element">
                                <h1 className="title">MongoDB</h1>
                                <img src={mongoDB}className="img" alt="mongoDB" />
                       
                    </div>
                     <div className="element">
                                <h1 className="title">Git</h1>
                                <img src={git} className="img" alt="git"/>
                       
                    </div>
                       <div className="element">
                                <h1 className="title">Docker</h1>
                                <img src={docker} className="img" alt="docker"/>
                       
                    </div>
                      <div className="element">
                                <h1 className="title">Redux</h1>
                                <img src={redux} className="img" alt="redux"/>
                       
                    </div>
                      <div className="element">
                                <h1 className="title">Eslint</h1>
                                <img src={eslint} className="img" alt="eslint"/>
                       
                    </div>


                </div>
            </section>
        </div>
    );



}

export default Tools;
