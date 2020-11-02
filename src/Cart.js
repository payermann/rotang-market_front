import React, { Component } from "react";
import ProductsService from "./ProductsService";
import { Link } from "react-router-dom";
const productsService = new ProductsService();

export function addCart(pk) {
  productsService.addCart(pk);
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      allprice: 0,
    };
    this.getCart = this.getCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.deleteCart = this.deleteCart.bind(this);
  }
  componentDidMount() {
    this.getCart();
  }

  getCart() {
    let self = this;
    productsService.getCart().then(function (result) {
      if (result.data["data"] != "Корзина пуста") {
        let vrprice = 0;
        let vr = [];
        for (let prop in result.data["data"]) {
          vr.push(result.data["data"][prop]);
          vr[prop]["kol"] =
            result.data["cart"][result.data["data"][prop]["pk"]];
          vrprice += vr[prop]["kol"] * vr[prop]["price"];
        }
        self.setState({
          products: vr,
          allprice: vrprice,
        });
      }
    });
  }

  deleteFromCart(pk) {
    var self = this;
    productsService.deleteFromCart(pk).then((result) => {
      if (result.data["data"] == "Успешно удалено") {
        self.getCart();
      }
    });
  }

  deleteCart() {
    var self = this;
    productsService.deleteCart().then((result) => {
      if (result.data["data"] == "Корзина очищена") {
        self.setState({
          products: [],
        });
      }
    });
  }

  render() {
    if (this.state.products == "") {
      return (
        <div className=".itemsMain">
          <h1 className="textMain">Ваша корзина пуста</h1>
        </div>
      );
    } else {
      return (
        <div className="products--list">
          <table className="table">
            <thead key="thead">
              <tr>
                <th>Наименование</th>
                <th>Цена (в рублях)</th>
                <th>Кол-во</th>
                <th>Общая цена</th>
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((c) => (
                <tr key={c.pk}>
                  <td>{c.name}</td>
                  <td>{c.price}</td>
                  <td>{c.kol}</td>
                  <td>{c.price * c.kol}</td>
                  <td>{c.specification}</td>
                  <td>
                    <Link to={"/products/" + c.pk}>Детально</Link>
                    <button
                      className="btn btn-primary"
                      onClick={this.deleteFromCart.bind(this, c.pk)}
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <label>
            Общая стоимость товара в корзине {this.state.allprice} рублей
          </label>
          <div id="NavigationPanel">
            <button
              className="btn btn-primary"
              onClick={this.deleteCart.bind()}
            >
              Очистить корзину
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
