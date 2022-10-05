import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
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
      <a href="http://13.94.114.133:8000/">
        Чат
      </a>
      <Link className="navbar-brand" to="/products/">
        Магазин мебели
      </Link>
      <Link to="/cart/">
        <num className="CartItemsNumber">{}</num>
        <ShoppingCartIcon />
      </Link>
    </nav>
    <div className="content">
      {/* <Routes>
        <Route path="/" exact component={Main} />
        <Route path="/products/" exact component={ProductsList} />
        <Route path="/products/:pk" component={ProductDetail} />
        <Route path="/cart/" exact component={Cart} />
      </Routes> */}
    </div>
  </div>
);
class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <BaseLayout />
      // </BrowserRouter>
      <BrowserRouter>
        <BaseLayout />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products/" element={<ProductsList />} />
            <Route path="/products/:pk" element={<ProductDetail />} />
            <Route path="/cart/" element={<Cart />} />
          </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
