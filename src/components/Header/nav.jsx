// import { BrowserRouter as Router, Link } from "react-router-dom"
import { useState } from "react";
import "./nav.css"
import { BiMenu } from "react-icons/Bi";
import{FaTimes} from "react-icons/Fa"

// import { Icon } from "react-icons-kit";
// import { menu } from "react-icons-kit/iconic/menu";
// import { x } from "react-icons-kit/iconic/x";
export default function Nav() {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
      <div className={toggle ? "container-nav expanded" : "container-nav"}>
        <nav>
          <ul>
            <li>
              <a href="#about" className="link">
                about
              </a>
            </li>
            <li>
              <a href="#passion" className="link">
                passion
              </a>
            </li>
            <li>
              <a href="#experience" className="link">
                experience
              </a>
            </li>
            <li>
              <a href="#project" className="link">
                project
              </a>
            </li>
            <li>
              <a href="#contact" className="link">
                contact
              </a>
            </li>
          </ul>
          <div className="toggle-icon" onClick={handleToggle}>
            {toggle ? <FaTimes />:<BiMenu />}
          </div>
        </nav>
      </div>
    );
}