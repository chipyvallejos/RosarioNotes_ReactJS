import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/cartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <div id="secciondos" className="container-fluid ">
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/category/:categoryId" component={ItemListContainer} />
            <Route path="/detail/:detailId" component={ItemDetailContainer} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>

        <div id="secciontres" className="mt-2">
          <div className="futer text-center">
            Tomás Vallejos - CoderHouse.
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
