import React, {
  Component,
  Icon,
  Link,
} from "react";
import map from 'lodash/map'
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
        prevPageURL: result.prevlink
      });
    });
  }
  nextPage() {
    var self = this;
    productsService.getProductsByURL(this.state.nextPageURL).then((result) => {
      self.setState({
        products: result.data,
        nextPageURL: result.nextlink,
        prevPageURL: result.prevlink
      });
    });
  };
  prevPage() {
    var self = this;
    productsService.getProductsByURL(this.state.prevPageURL).then((result) => {
      self.setState({
        products: result.data,
        prevPageURL: result.prevlink,
        nextPageURL: result.nextlink
      });
    });
  };

  render() {
    return (
      <div className="products--list">
        <div className="items">
            {this.state.products.map((c) => (
              <div key={c.pk} className="item">
                <div>{c.name}</div>
                <div>{c.price}</div>
                <div>{c.specification}</div>
              </div>
            ))}
        </div>
        <button className="btn btn-primary" onClick={this.prevPage}>
          Предыдущая страница
        </button>
        <button className="btn btn-primary" onClick={this.nextPage}>
          Следующая страница
        </button>
      </div>
    );
  }
}

export default ProductsList;