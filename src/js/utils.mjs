// src/js/utils.mjs

export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

export function renderListWithTemplate(template, parentElement, list, position = "afterbegin", clear = false) {
  const htmlStrings = list.map(template);
  if (clear) parentElement.innerHTML = "";
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if (callback) callback(data);
}

async function loadTemplate(path) {
  const res = await fetch(path);
  return res.text();
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const footerTemplate = await loadTemplate("../partials/footer.html");

  renderWithTemplate(headerTemplate, document.querySelector("#main-header"));
  renderWithTemplate(footerTemplate, document.querySelector("#main-footer"));
}

// ✅ Custom alert utility
export function alertMessage(message, scroll = true) {
  const main = document.querySelector('main');

  // remove old alert
  const oldAlert = main.querySelector('.alert');
  if (oldAlert) oldAlert.remove();

  const alert = document.createElement('div');
  alert.classList.add('alert');
  alert.textContent = message;

  main.prepend(alert);

  if (scroll) window.scrollTo(0, 0);
}
