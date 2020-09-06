import React, { Component } from "react";

import ProductsService from "./ProductsService";

const productsService = new ProductsService();

class ProductDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    if (params && params.pk) {
      productsService.getProduct(params.pk).then((c) => {
        this.refs.name.value = c.name;
        this.refs.price.value = c.price;
        this.refs.specification.value = c.specification;
        this.refs.image.value = c.image;
      });
    }
  }

  render() {
    return (
      <div className="form-group">
        <label>Name :</label>

        <input className="form-control" ref="name" readOnly />

        <label>price:</label>
        <input className="form-control" ref="price" readOnly />

        <label>specification:</label>
        <input className="form-control" ref="specification" readOnly />
      </div>
    );
  }
}

export default ProductDetail;
