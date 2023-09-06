import { BrowserRouter as Router, Link } from "react-router-dom";
// import "./nav.css";

export default function MobileNav() {
  return (
    <Router>
      <div className="container-na">
        <nav>
          <ul>
            <li>
              <Link href="#about" className="link">
                about
              </Link>
            </li>
            <li>
              <Link to="#passion" className="link">
                passion
              </Link>
            </li>
            <li>
              <Link to="#experience" className="link">
                experience
              </Link>
            </li>
            <li>
              <Link to="#project" className="link">
                project
              </Link>
            </li>
            <li>
              <Link to="#contact" className="link">
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}
