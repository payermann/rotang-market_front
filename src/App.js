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
      <Link className="navbar-brand" to="/">
        Приветствие
      </Link>
      <Link className="navbar-brand" to="/products/">
        Магазин мебели
      </Link>
      <Link to="/cart/">
        <num className="CartItemsNumber">{}</num>
        <ShoppingCartIcon />
      </Link>
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
