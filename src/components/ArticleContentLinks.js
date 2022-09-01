import { Container, Row, Col } from "reactstrap";
import { Fragment } from "react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./articleContentLinks.scss";

const ArticleContentLinks = () => {
  return (
    <Fragment>
      <Row class="blog-row">
        <Col className="d-flex pt-3 article-meta">
          <div className="social-links-comment">2 COMMENTS</div>
          <div class="footer-links">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
export default ArticleContentLinks;
