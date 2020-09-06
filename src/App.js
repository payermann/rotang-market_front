import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import ProductsList from "./ProductsList";
import "./App.css";
import ProductDetail from "./ProductDetail";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const BaseLayout = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <a className="navbar-brand" href="/">
        Мебель для вас
      </a>
      <a>
          <ShoppingCartIcon/>  
      </a>
    </nav>
    <div className="content">
      <Route path="/" exact component={ProductsList} />
      <Route path="/products/:pk" component={ProductDetail} />
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
