import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import ProductsList from "./ProductsList";
import "./App.css";
import ProductDetail from "./ProductDetail";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Cart from "./Cart";
import Main from "./main";

const BaseLayout = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <a className="navbar-brand" href="/">
        Приветствие
      </a>
      <a className="navbar-brand" href="/products/">
        Магазин мебели
      </a>
      <a href="/cart/">
        <ShoppingCartIcon />
      </a>
    </nav>
    <div className="content">
      <Route path="/" exact component={Main} />
      <Route path="/products/" exact component={ProductsList} />
      <Route path="/products/:pk" component={ProductDetail} />
      <Route path="/cart/" exact component={Cart} />
    </div>
  </div>
);
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    );
  }
}
export default App;
