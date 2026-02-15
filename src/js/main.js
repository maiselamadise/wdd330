import { loadHeaderFooter, alertMessage } from "./utils.js";

document.addEventListener("DOMContentLoaded", init);

async function init() {
  try {
    // Load shared header and footer
    await loadHeaderFooter();
  } catch (error) {
    console.error("Initialization error:", error);
    alertMessage("Something went wrong loading the page.");
  }
}
