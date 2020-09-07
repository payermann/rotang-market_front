import React, { Component } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ProductsService from "./ProductsService";
import IconButton from "@material-ui/core/IconButton";
const productsService = new ProductsService();

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      specification: "",
      image: "",
    };
  }

  componentDidMount() {
    let self = this;
    const {
      match: { params },
    } = this.props;
    if (params && params.pk) {
      productsService.getProduct(params.pk).then((c) => {
        self.setState({
          name: c.name,
          price: c.price,
          specification: c.specification,
          image: c.image,
        });
      });
    }
  }

  render() {
    return (
      // <div className="form-group">
        <div className="item">
                <div className="product-img">
                  <img alt={this.state.name} src={this.state.image} />
                </div>
                <div className="product">
                  <h1 id="product-name">{this.state.name}</h1>
                  <h4 id="product-description">{this.state.specification}</h4>
                </div>
              
              <div className="price-add">
                <h5 id="product-price">{this.state.price}₽</h5>
                <IconButton color="primary" aria-label="add to shopping cart">
                  <AddShoppingCartIcon />
                </IconButton>
              </div>
        </div>      
      // </div>
      
    );
  }
}

export default ProductDetail;
