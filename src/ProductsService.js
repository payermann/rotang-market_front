import axios from "axios";
const API_URL = "http://13.94.114.133:8000";

export default class ProductsService {
  constructor() {}

  getProducts() {
    const url = `${API_URL}/api/products/`;
    return axios.get(url).then((response) => response.data);
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
