import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from "reactstrap";
import "./article.scss";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config.js";
import { collection, getDocs } from "@firebase/firestore";
import "./articleContentLinks.scss";

import "./article.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ArticleDetails = () => {
  const { id } = useParams();

  const [articles, setArticles] = useState([]);
  const articlesCollectionsRef = collection(db, "articles");
  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articlesCollectionsRef);
      console.log(data);

      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getArticles();
  }, []);

  const article = articles.find((article) => article.id === id);
  console.log(article);
  return (
    <Fragment>
      {article && (
        <Card className="card">
          <CardSubtitle className="mb-2 text-muted article-subtitle" tag="h6">
            <span className="article-date">{article.subtitle}</span>
          </CardSubtitle>
          <CardTitle className="article-title" tag="h5">
            {article.title}
          </CardTitle>
          <CardBody className="article-image">
            <img
              alt="Card cap"
              src={article.image}
              width="100%"
              height="600px"
            />
          </CardBody>
          <CardBody className="image">
            <CardText className="article-content" style={{ marginTop: "30px" }}>
              {article.text}
            </CardText>
            <div className="d-flex pt-3 article-meta" xs="9">
              <div className="comment">2 COMMENTS</div>
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
            </div>
          </CardBody>
          <br />
        </Card>
      )}
    </Fragment>
  );
};

export default ArticleDetails;
