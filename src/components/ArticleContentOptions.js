import Navbar from "./Navbar";

import ArticleOptions from "./ArticleOptions";
import { Container, Row, Col } from "reactstrap";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from "reactstrap";
import "./articleContent.scss";
import { useState, useEffect, Fragment } from "react";
import { db } from "../firebase-config.js";
import { collection, getDocs } from "@firebase/firestore";
import "./article.scss";
import "./articleOptions.scss";

const ArticleContentOptions = () => {
  const [articleOptions, setArticleOptions] = useState([]);
  const articleOptionsCollectionsRef = collection(db, "articleOptions");

  useEffect(() => {
    const getArticleOptions = async () => {
      const data = await getDocs(articleOptionsCollectionsRef);
      setArticleOptions(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getArticleOptions();
  }, []);
  const article1 = articleOptions[0];
  const article2 = articleOptions[1];
  const article3 = articleOptions[2];
  if (!article1 || !article2 || !article3) {
    return <Fragment></Fragment>;
  }

  return (
    <Fragment class="more-to-love">
      <CardTitle
        className="article-title options"
        tag="h5"
        style={{ color: "#ec3a23" }}
      >
        More To Love
      </CardTitle>
      <div className="article-content-options">
        <Card className="card">
          <CardBody className="article-image">
            <div className="article-options-image">
              <img
                alt="Card cap"
                className="article-options-image"
                src={article1.image}
                width="80%"
                height="250px"
              />
            </div>

            <CardTitle className="article-title options" tag="h5">
              {article1.title}
            </CardTitle>
          </CardBody>
        </Card>
        <Card className="card">
          <CardBody className="article-image">
            <div className="article-options-image">
              <img
                alt="Card cap"
                className="article-options-image"
                src={article2.image}
                width="80%"
                height="250px"
              />
            </div>

            <CardTitle className="article-title options" tag="h5">
              {article2.title}
            </CardTitle>
          </CardBody>
        </Card>
        <Card className="card">
          <CardBody className="article-image">
            <div className="article-options-image">
              <img
                alt="Card cap"
                className="article-options-image"
                src={article3.image}
                width="80%"
                height="250px"
              />
            </div>
            <CardTitle className="article-title options" tag="h5">
              {article3.title}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
      );
    </Fragment>
  );
};

export default ArticleContentOptions;
