import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/Firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { detailId } = useParams();

  const getItems = (id) => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");

    const item = itemsCollection.doc(id);
    console.log("firebase", item);
    return item.get();
  };

  useEffect(() => {
    getItems(detailId).then((resultado) => {
      if (resultado.exists) {
        setItem({ id: resultado.id, ...resultado.data() });
      }
    });
    return;
  }, [detailId]);

  return (
    <main className="columna-principal">
      <ItemDetail item={item} />
    </main>
  );
};

export default ItemDetailContainer;
