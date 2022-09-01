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
import { db } from "../firebase-config.js";
import { collection, getDocs } from "@firebase/firestore";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const articlesCollectionsRef = collection(db, "articles");
  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articlesCollectionsRef);
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getArticles();
  }, []);
  console.log(articles);
  return (
    <Fragment>
      {articles.map((article, index) => {
        return (
          <Card className="card" key={index}>
            <CardBody className="article-image">
              <img
                alt="Card cap"
                src={article.image}
                width="100%"
                height="600px"
              />
              <CardSubtitle
                className="mb-2 text-muted article-subtitle"
                tag="h6"
              >
                <span className="article-date">{article.subtitle}</span>
              </CardSubtitle>
              <CardTitle className="article-title" tag="h5">
                {article.title}
              </CardTitle>
            </CardBody>
            <CardBody className="image">
              <CardText className="article-content">{article.content}</CardText>
              <div className="reading-comment">
                <Link to={`article/${article.id}`} className="reading">
                  CONTINUE READING
                </Link>

                <CardLink className="comment" href="#">
                  COMMENTS
                </CardLink>
              </div>
            </CardBody>
            <br />
          </Card>
        );
      })}
    </Fragment>
  );
};

export default Article;
