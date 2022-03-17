import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductsScreen from "../screens/ProductsScreen/ProductsScreen";
import CartScreen from "../screens/CartScreen/CartScreen";
import HomePage from "../screens/HomePage/HomePage";
import Header from "../components/Header/Header"
import { ThemeProvider } from "styled-components";


const Router = () => {
  const [cart, setCart] = useState([]);

  return (
    
      <Switch>
        <Route exact path="/">
            <HomePage  />
          </Route>
          <Route exact path="/produtos">
            <ProductsScreen cart={cart} setCart={setCart} />
          </Route>
          <Route exact path="/carrinho">
            <CartScreen cart={cart} setCart={setCart} />
          </Route>
          <Route>
            <div>Erro: página não encontrada</div>
          </Route>
      </Switch>
    
  );
};

export default Router;
