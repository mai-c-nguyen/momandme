import Navbar from "./Navbar";

import ArticleDetails from "./ArticleDetails";
import ArticleContentLinks from "./ArticleContentLinks";
import ArticleContentSidebar from "./ArticleContentSidebar";
import { Container, Row, Col } from "reactstrap";
import ArticleContentOptions from "./ArticleContentOptions";

const ArticleContent = () => {
  return (
    <Container className="blog">
      <Row>
        <Row>
          <Col>
            <Navbar />
          </Col>
        </Row>

        <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
          {/* <Col
            className="col"
            xs="3"
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <ArticleContentSidebar />
          </Col> */}
          <Col className="col" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <ArticleDetails />
          </Col>
        </Row>
        <Row>
          <ArticleContentOptions />
        </Row>
      </Row>
    </Container>
  );
};

export default ArticleContent;
