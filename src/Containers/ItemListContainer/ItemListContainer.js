import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getFirestore } from "../../firebase/Firebase";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");

    if (categoryId) {
      const filter = itemsCollection.where("categoryId", "==", categoryId);
      const promFilter = filter.get();

      promFilter.then((snapshot) => {
        if (snapshot.size > 0) {
          setItems(
            snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
      });
    } else {
      const prom = itemsCollection.get();
      prom.then((snapshot) => {
        if (snapshot.size > 0) {
          setItems(
            snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
      });
    }
  }, [categoryId]);

  return (
    <main className="columna-principal">
      <ItemList items={items} />
    </main>
  );
};

export default ItemListContainer;
