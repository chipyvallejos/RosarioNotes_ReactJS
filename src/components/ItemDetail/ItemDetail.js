import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/cartContext";

const ItemDetail = ({ item }) => {
  console.log("imagen", item);

  const [count, setCount] = useState(0);

  const { addItem } = useContext(CartContext);

  const addHandler = (counter) => {
    setCount(counter);
  };

  const terminarCompra = () => {
    addItem(item, count);
  };

  return (
    <CardDeck>
      <Card>
        <Card.Img
          variant="top"
          src={item.pictureURL}
          alt="Imagen del producto"
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">$ {item.price}</small>
        </Card.Footer>
        <div className="mb-4">
          {count === 0 ? (
            <ItemCount stock={item.stock} initial="1" onAdd={addHandler} />
          ) : (
            <Button
              onClick={terminarCompra}
              as={Link}
              to={"/cart"}
              variant="btn btn-outline-secondary "
              size="lg"
            >
              Añadir al carrito
            </Button>
          )}
        </div>
        <Link to={`/`}>
          <Button variant="btn btn-outline-secondary" size="sm">
            Volver al Inicio
          </Button>
        </Link>
      </Card>
    </CardDeck>
  );
};

export default ItemDetail;
