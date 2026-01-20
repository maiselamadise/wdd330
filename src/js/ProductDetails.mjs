import { setLocalStorage } from './utils.mjs';

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.dataSource = dataSource;
    this.product = {};
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();

    document
      .getElementById('addToCart')
      .addEventListener('click', this.addProductToCart.bind(this));
  }

  addProductToCart() {
    let cart = JSON.parse(localStorage.getItem('so-cart')) || [];
    cart.push(this.product);
    setLocalStorage('so-cart', cart);
  }

  renderProductDetails() {
    document.querySelector('.product-name').textContent = this.product.Name;
    document.querySelector('.product-price').textContent = `$${this.product.FinalPrice}`;
    document.querySelector('.product-description').textContent = this.product.DescriptionHtmlSimple;

    const img = document.querySelector('.product-image');
    img.src = this.product.Images.PrimaryLarge;
    img.alt = this.product.Name;
  }
}
