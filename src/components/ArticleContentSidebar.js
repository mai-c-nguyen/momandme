import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Container,
} from "reactstrap";
import "./article.scss";

const ArticleContentSidebar = () => {
  return (
    <Card style={{ padding: "0" }}>
      <CardSubtitle className="mb-2 text-muted article-subtitle" tag="h6">
        <span className="article-date">Aug 22, 2022</span>
      </CardSubtitle>
      <CardLink className="comment" href="#">
        COMMENTS
      </CardLink>
    </Card>
  );
};

export default ArticleContentSidebar;
