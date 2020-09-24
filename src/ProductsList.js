import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import ProductsService from "./ProductsService";
const productsService = new ProductsService();

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      nextPageURL: "",
      prevPageURL: "",
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }
  componentDidMount() {
    let self = this;
    productsService.getProducts().then(function (result) {
      self.setState({
        products: result.data,
        nextPageURL: result.nextlink,
        prevPageURL: result.prevlink,
      });
    });
  }
  nextPage() {
    var self = this;
    productsService.getProductsByURL(this.state.nextPageURL).then((result) => {
      self.setState({
        products: result.data,
        nextPageURL: result.nextlink,
        prevPageURL: result.prevlink,
      });
    });
  }
  prevPage() {
    var self = this;
    productsService.getProductsByURL(this.state.prevPageURL).then((result) => {
      self.setState({
        products: result.data,
        prevPageURL: result.prevlink,
        nextPageURL: result.nextlink,
      });
    });
  }

  render() {
    return (
      <div className="products--list">
        <div className="items">
          {this.state.products.map((c) => (
            <div key={c.pk} className="item">
              <Link to={`/products/${c.pk}`}>
                <div className="product-img">
                  <img alt={c.name} src={c.image} />
                </div>
                <div className="product-details">
                  <h1 id="product-name">{c.name}</h1>
                  <h4 id="product-description">{c.specification}</h4>
                </div>
              </Link>
              <div className="price-add">
                <h5 id="product-price">{c.price}₽</h5>
                <IconButton color="primary" aria-label="add to shopping cart">
                  <AddShoppingCartIcon />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
        <div id="NavigationPanel">
          <button className="btn btn-primary" onClick={this.prevPage}>
            <ArrowBackIcon />
          </button>
          <button className="btn btn-primary" onClick={this.nextPage}>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    );
  }
}

export default ProductsList;
