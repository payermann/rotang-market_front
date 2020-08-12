import React, {
  Component
} from "react";
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
        <table className="table">
          <thead key="thead">
            <tr>
              <th>#</th>
              <th>Наименование</th>
              <th>Цена (в рублях)</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((c) => (
              <tr key={c.pk}>
                <td>{c.pk} </td>
                <td>{c.name}</td>
                <td>{c.price}</td>
                <td>{c.specification}</td>
                <td>
                  <a href={"/products/" + c.pk}>Детально</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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