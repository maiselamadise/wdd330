import { loadHeaderFooter, alertMessage } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", init);

function init() {
  loadHeaderFooter();
  document
    .querySelector("#checkout-form")
    .addEventListener("submit", handleCheckout);
}

function handleCheckout(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const order = Object.fromEntries(formData.entries());

  // 🔍 basic validation (extra safety)
  if (!order.fullname || !order.address || !order.ccnum) {
    alertMessage("Please fill in all required fields.");
    return;
  }

  console.log("ORDER DATA:", order);

  // ✅ clear cart
  localStorage.removeItem("so-cart");

  // ✅ redirect to success page
  window.location.href = "../checkout/success.html";
}
