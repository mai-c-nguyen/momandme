import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from "reactstrap";
import "./article.scss";
import "./articleOptions.scss";

const ArticleOptions = ({ image, title, subtitle, catchy }) => {
  return (
    <Card className="card">
      <CardBody className="article-image">
        <div className="article-options-image">
          <img
            alt="Card cap"
            className="article-options-image"
            src={image}
            width="100%"
            height="300px"
          />
        </div>
        <CardSubtitle className="mb-2 text-muted article-subtitle" tag="h6">
          <span className="article-date">{subtitle}</span>
        </CardSubtitle>
        <CardTitle className="article-title options" tag="h5">
          {title}
        </CardTitle>
      </CardBody>
      <CardBody className="article-image">
        <CardText className="article-content options-content">
          {catchy}
        </CardText>
        <div className="reading-comment">
          <CardLink className="comment options-comment" href="#">
            COMMENTS
          </CardLink>
        </div>
      </CardBody>
      <br />
    </Card>
  );
};

export default ArticleOptions;
