import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Button,
  CardFooter,
} from "reactstrap";
import "./blogger.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import blogger from "../assets/images/blogger.jpeg";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Blogger = () => {
  return (
    <Card className="blogger">
      <CardBody className="article-image">
        <img alt="Sample" src={blogger} height="600px" width="100%" />
      </CardBody>
      <CardFooter className="blogger-footer">
        <CardTitle className="blogger-name" tag="h5">
          Celine
        </CardTitle>
        <CardText className="blogger-text">
          Mom and Me is a daily women’s lifestyle site that covers relationships
          and parenting.
        </CardText>
        <div class="footer-links">
          <Link to="/">
            <FaInstagram />
          </Link>
          <Link to="/">
            <FaFacebook />
          </Link>
          <Link to="/">
            <FaTwitter />
          </Link>
        </div>
        <br />
      </CardFooter>
    </Card>
    // <Card className="blogger">
    //   <img
    //     alt="Sample"
    //     src="https://images.unsplash.com/photo-1602195053633-4a85496a8cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    //     height="600px"
    //     width="100%"
    //   />
    //   <CardBody>
    //     <CardTitle className="blogger-name" tag="h5">
    //       Chi Nguyen
    //     </CardTitle>
    //     <CardText className="blogger-text">
    //       Mom and Me is a daily women’s lifestyle site that covers relationships
    //       and parenting.
    //     </CardText>
    //   </CardBody>

    //   <div class="footer-links">
    //     <a href="#">
    //       <FaInstagram />
    //     </a>
    //     <a href="#">
    //       <FaFacebook />
    //     </a>
    //     <a href="#">
    //       <FaTwitter />
    //     </a>
    //   </div>
    //   <br />
    // </Card>
  );
};

export default Blogger;
