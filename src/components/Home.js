import { createRoot } from "react-dom/client";
import { Container, Row, Col } from "reactstrap";
import Article from "./Article";
import ArticleOptions from "./ArticleOptions";
import Blogger from "./Blogger";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { db } from "../firebase-config.js";
import { collection, getDocs } from "@firebase/firestore";
import ArticleContent from "./ArticleContent";
import "../style.css";

function Home() {
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

  return (
    <Fragment>
      <Container className="blog">
        <Row class="blog-row">
          <Row>
            <Col className="">
              <Navbar />
            </Col>
          </Row>
          <Row>
            <Col className="">
              <Article />
            </Col>
          </Row>

          <Row>
            {articleOptions.slice(0, 2).map((articleOption, index) => {
              return (
                <Col className="" xs="6">
                  <ArticleOptions
                    key={index}
                    image={articleOption.image}
                    title={articleOption.title}
                    subtitle={articleOption.subtitle}
                    catchy={articleOption.catchy}
                  />
                </Col>
              );
            })}
            {articleOptions.slice(2, 4).map((articleOption, index) => {
              return (
                <Col className="" xs="6">
                  <ArticleOptions
                    key={index}
                    image={articleOption.image}
                    title={articleOption.title}
                    subtitle={articleOption.subtitle}
                    catchy={articleOption.catchy}
                  />
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="">
              <Blogger />
            </Col>
          </Row>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Home;
