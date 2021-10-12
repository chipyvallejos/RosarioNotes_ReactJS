import React, { Fragment, useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { MdClear } from "react-icons/md";
import { CartContext } from "../../context/cartContext";
import Modal from "../Modal/Modal";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);

  const { cart, removeItem, clearItems, itemsTotales, precioTotal } =
    useContext(CartContext);

  return (
    <Fragment>
      {!cart.length ? (
        <h3 className="text-center">
          Tu carrito esta vacío{" "}
          <Button size="sm" as={Link} to={"/"} variant="outline-secondary">
            Ir al home
          </Button>
        </h3>
      ) : (
        <div>
          <Table striped bordered hover variant="light" className="text-center">
            <tbody>
              <tr>
                <th></th>
                <th>Producto</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>

              {cart.map((cartItem) => (
                <tr key={cartItem.prod.id}>
                  <td>
                    <MdClear onClick={() => removeItem(cartItem.prod.id)} />
                  </td>
                  <td>
                    <img
                      className="imagenCarrito"
                      src={cartItem.prod.pictureURL}
                      alt="imagenCarrito"
                      width="60"
                      height="60"
                    />
                  </td>
                  <td>{cartItem.prod.title}</td>
                  <td>{cartItem.cant}</td>
                  <td>${cartItem.prod.price * cartItem.cant}</td>
                </tr>
              ))}
              <tr>
                <td>Detalle</td>
                <td>-</td>
                <td>Cantidad Total: {itemsTotales}</td>
                <td>Precio Total: ${precioTotal}</td>
                <td>
                  <Button variant="outline-danger" onClick={() => clearItems()}>
                    Eliminar Todo
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>

          <Link to={`/`}>
            <Button variant="btn btn-outline-secondary" size="sm">
              Volver al Inicio
            </Button>
          </Link>
          <Button
            variant="outline-secondary"
            onClick={() => setShowModal(true)}
          >
            Generar Orden de Compra
          </Button>
          <Modal show={showModal} onHide={() => setShowModal(false)} />
        </div>
      )}
    </Fragment>
  );
};

export default Cart;
