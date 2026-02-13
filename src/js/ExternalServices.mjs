// src/js/ExternalServices.mjs

const baseURL = "https://wdd330-backend.onrender.com/api/v1/";

async function convertToJson(res) {
  // Always parse the response body first
  const data = await res.json();

  if (res.ok) {
    return data;
  }

  // Preserve server error details
  throw {
    name: "servicesError",
    message: data
  };
}

export default class ExternalServices {
  constructor() {}

  async getData(category) {
    const response = await fetch(
      baseURL + `products/search/${category}`
    );
    const data = await convertToJson(response);
    return data.Result;
  }

  async findProductById(id) {
    const response = await fetch(
      baseURL + `product/${id}`
    );
    const data = await convertToJson(response);
    return data.Result;
  }

  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    };

    const response = await fetch(
      baseURL + "checkout/",
      options
    );

    return convertToJson(response);
  }
}
