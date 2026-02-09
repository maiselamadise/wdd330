import ExternalServices from './ExternalServices.mjs';
import { alertMessage } from './utils.mjs';

export default class CheckoutProcess {
  constructor() {
    this.services = new ExternalServices();
  }

  async checkout() {
    try {
      const order = this.buildOrder();
      await this.services.checkout(order);

      // ✅ Happy path
      localStorage.removeItem('so-cart');
      window.location.href = '/checkout/success.html';
    } catch (err) {
      console.error(err);

      const message =
        err?.message?.message ||
        err?.message ||
        'Order failed. Please try again.';

      alertMessage(message, true);
    }
  }

  buildOrder() {
    const form = document.querySelector('#checkoutForm');
    const formData = new FormData(form);
    return Object.fromEntries(formData.entries());
  }
}
