import axios from "axios";
const API_URL = "http://13.94.114.133:8000";

export default class ProductsService {
  constructor() {}

  getProducts() {
    const url = `${API_URL}/api/products/`;
    return axios.get(url).then((response) => response.data);
  }
  getCart() {
    const url = `${API_URL}/api/cart/`;
    return axios
      .get(url, { withCredentials: true })
      .then((response) => response);
  }
  deleteCart() {
    const url = `${API_URL}/api/cart/delete/all`;
    return axios
      .delete(url, { withCredentials: true })
      .then((response) => response);
  }
  addCart(pk) {
    const url = `${API_URL}/api/cart/add/${pk}`;
    return axios
      .post(
        url,
        {},
        {
          withCredentials: true,
        }
      )
      .then((response) => response);
  }
  deleteFromCart(pk) {
    const url = `${API_URL}/api/cart/delete/${pk}`;
    return axios
      .delete(url, {
        withCredentials: true,
      })
      .then((response) => response);
  }
  getProductsByURL(link) {
    const url = `${API_URL}${link}`;
    return axios.get(url).then((response) => response.data);
  }
  getProduct(pk) {
    const url = `${API_URL}/api/products/${pk}`;
    return axios.get(url).then((response) => response.data);
  }
}
