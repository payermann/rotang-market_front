import React, {
  Component,
} from "react";
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
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
                  <Icon small id="add-icon">add_shopping_cart</Icon>
                </div>
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