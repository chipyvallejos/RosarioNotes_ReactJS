import React, { Fragment, useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));
  useEffect(() => {
    setCount(parseInt(initial));
    return;
  }, [initial]);

  const sumItem = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const resItem = () => {
    count !== 0 ? setCount(count - 1) : alert("No agregaste ningún artículo");
  };

  return (
    <Fragment>
      <div>
        <Button onClick={resItem} variant="outline-danger" size="xs">
          -
        </Button>
        <Button variant="light" className="m-1">
          {count}
        </Button>
        <Button onClick={sumItem} variant="outline-success" size="xs">
          +
        </Button>
      </div>
      <div>
        <Button
          onClick={() => onAdd(count)}
          variant="outline-secondary "
          size="lg"
          className="mt-1"
        >
          Confirmar Cantidad
        </Button>
      </div>
    </Fragment>
  );
};

export default ItemCount;
