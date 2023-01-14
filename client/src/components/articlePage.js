import { Button, Card } from "react-bootstrap";
import moment from "moment";
import Modal from "react-bootstrap/Modal";

function leftArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      class="bi bi-arrow-left"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
      />
    </svg>
  );
}

const ArticlePage = ({ article, show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      fullscreen
      animation={false}
    >
      <Modal.Body>
        <Card>
          <Card.Header>
            <Button variant="secondary" onClick={handleClose}>
              {leftArrow()}
            </Button>
            <Card.Title>{article.title}</Card.Title>
            <Card.Subtitle className="text-muted">
              Published: {moment(article.publishedAt).format("MMM DD, H:mm")}
            </Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <p>Author: {article.author}</p>
            <img
              src={article.urlToImage}
              alt={article.title}
              className="img-fluid"
            />
            <div>{article.description}</div>
            <div className="content-div">{article.content}</div>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default ArticlePage;
