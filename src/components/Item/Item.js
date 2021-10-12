import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const Item = ({ item }) => {
  console.log("item", item);

  return (
    <CardDeck style={{ width: "18 rem" }}>
      <Card>
        <Card.Img variant="top" src={item.pictureURL} />
        <Card.Body>
          <Link to={`/detail/${item.id}`}>
            <Card.Title>{item.title}</Card.Title>
          </Link>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">$ {item.price}</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={item.pictureURL} />
        <Card.Body>
          <Link to={`/detail/${item.id}`}>
            <Card.Title>{item.title}</Card.Title>
          </Link>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">$ {item.price}</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={item.pictureURL} />
        <Card.Body>
          <Link to={`/detail/${item.id}`}>
            <Card.Title>{item.title}</Card.Title>
          </Link>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">$ {item.price}</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default Item;
