export async function convertToJson(res) {
  const jsonResponse = await res.json(); // parse body first
  if (res.ok) {
    return jsonResponse;
  } else {
    // throw structured error with server details
    throw { name: 'servicesError', message: jsonResponse };
  }
}

export default class ExternalServices {
  constructor() {
    this.baseUrl = '/api'; // adjust to your actual API base
  }

  async checkout(order) {
    const response = await fetch(`${this.baseUrl}/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
    return convertToJson(response);
  }
}
