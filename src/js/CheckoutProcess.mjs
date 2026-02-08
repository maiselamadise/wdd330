import ExternalServices from './ExternalServices.mjs';
import { alertMessage } from './utils.mjs';

export default class CheckoutProcess {
  constructor() {
    this.services = new ExternalServices();
  }

  async checkout() {
    try {
      const order = this.buildOrder(); // collect form/cart data
      const result = await this.services.checkout(order);

      // ✅ Success path
      localStorage.removeItem('so-cart');
      window.location.href = '/checkout/success.html';
    } catch (err) {
      // Unhappy path
      alertMessage(`Order failed: ${err.message.error || 'Unknown error'}`, true);
    }
  }

  buildOrder() {
    // Example: collect form data
    const form = document.querySelector('#checkoutForm');
    const formData = new FormData(form);
    const order = Object.fromEntries(formData.entries());
    return order;
  }
}
