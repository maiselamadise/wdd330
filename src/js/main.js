import ProductData from "./js/ProductData.mjs";
import ProductList from "./js/ProductList.mjs";

const dataSource = new ProductData("json/tents.json");
const listElement = document.querySelector(".product-list");

const productList = new ProductList("tent", dataSource, listElement);
productList.init();
