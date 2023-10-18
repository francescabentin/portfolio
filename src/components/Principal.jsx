import Menu from './Menu';
import Introduction from './Introduction';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Technologies from './Tools';
import '../styles/Principal.scss'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"



function Principal() {

   

    return (
        <div >
            <div >
                <Menu />
                <Introduction  />
                <Projects  />
                <Technologies  />
                <Contact  />
            </div>
            <Footer  />
        </div>
    );
};

export default Principal;