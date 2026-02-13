// src/js/checkout.js

import CheckoutProcess from './CheckoutProcess.mjs';

const myCheckout = new CheckoutProcess();

document.querySelector("#checkoutSubmit")
  .addEventListener("click", (e) => {
    e.preventDefault();

    const myForm = document.querySelector("#checkoutForm");
    const isValid = myForm.checkValidity();

    if (!isValid) {
      myForm.reportValidity();
      return;
    }

    myCheckout.checkout();
  });
