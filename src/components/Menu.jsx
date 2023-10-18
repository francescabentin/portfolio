import "../styles/Menu.scss";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Menu(props) {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleCloseMenu = () => {
    if (menu === true) {
      setMenu(false);
    }
  };

  return (

    <div className="menu">
      <div id="menuToggle">
        <div className="iconMenu">
        <input id="checkbox" type="checkbox" onClick={toggleMenu} />
        <label class="toggle" for="checkbox">
          <div class="bar bar--top"></div>
          <div class="bar bar--middle"></div>
          <div class="bar bar--bottom"></div>
        </label>
        </div>
      </div>

      <ul className={`${menu ? "menu-roll" : "menu"}`}>
        <li>
          <AnchorLink
            onClick={handleCloseMenu}
            offset={() => 100}
            href="#aboutmeId"
            className="menu-link">
            About me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            onClick={handleCloseMenu}
            offset={() => 100}
            href="#projectId"
            className="menu-link">
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            onClick={handleCloseMenu}
            offset={() => 100}
            href="#ToolsId"
            className="menu-link">
            Tools
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            onClick={handleCloseMenu}
            offset={() => 100}
            href="#contactId"
            className="menu-link">
            Contact me
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
