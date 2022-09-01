import "./navbar.scss";
import logo from "../assets/images/Mom and Me.png";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function Navbar() {
  return (
    <ul class="list-inline tabs-underlined">
      <div className="first-header-group">
        <li>
          <Link to="/" class="tab-underlined active">
            Motherhood
          </Link>
        </li>
        <li>
          <Link to="/" class="tab-underlined">
            Parenting
          </Link>
        </li>
        <li>
          <Link to="/" class="tab-underlined">
            Design
          </Link>
        </li>
      </div>
      <div className="logo">
        <Link to="/" class="tab-underlined">
          {/* <img src={logo} /> */}
          MOM AND ME
        </Link>
      </div>
      <div className="second-header-group">
        <li>
          <Link to="/" class="tab-underlined active">
            Relationships
          </Link>
        </li>
        <li>
          <Link to="/" class="tab-underlined">
            Food
          </Link>
        </li>
        <li>
          <Link to="/" class="tab-underlined">
            Travel
          </Link>
        </li>
      </div>
    </ul>
  );
}

export default Navbar;
