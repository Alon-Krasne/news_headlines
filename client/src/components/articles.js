import React, { useState } from "react";
import { Col, Row, Card, Image, Button } from "react-bootstrap";
import moment from "moment";
import ArticlePage from "./articlePage";
import axios from "axios";

const colors = [
  "white",
  "lightgray",
  "lightcyan",
  "lightyellow",
  "lightgreen",
  "lightcoral",
  "lightpink",
  "lightblue",
  "lightseagreen",
  "lightgoldenrodyellow",
];

const NewsArticles = ({ articles }) => {
  const [articleData, setArticleData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleReadMoreClick = async (article) => {
    try {
      const response = await axios.get(`/news/${article.id}`);
      setArticleData(response.data);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row className="px-5">
        {articles.map((article, index) => (
          <Col md={4} key={article.title} className="my-3">
            <Card style={{ backgroundColor: colors[index % colors.length] }}>
              <Card.Body>
                <Card.Title>
                  <Card.Link href={article.url} target="_blank">
                    {article.title}
                  </Card.Link>
                </Card.Title>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-calendar-alt mr-2"></i>
                    {moment(article.publishedAt).format("MMM DD, H:mm")}
                  </li>
                  <li>
                    {article.urlToImage ? (
                      <Image
                        src={article.urlToImage}
                        alt={article.title}
                        fluid
                      />
                    ) : (
                      <div className="no-image">No Image</div>
                    )}
                  </li>
                  <li>{article.description.substring(0, 80)}...</li>
                </ul>
                <Button
                  variant="primary"
                  onClick={() => handleReadMoreClick(article)}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ArticlePage
        show={showModal}
        article={articleData}
        handleClose={() => setShowModal(false)}
      />
      {!articles.length && (
        <div className="text-center">
          <h1 className="my-5">No articles found</h1>
        </div>
      )}
    </>
  );
};

export default NewsArticles;
