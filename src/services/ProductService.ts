import httpRequest from "../services/HttpRequest";

async function getAllProducts() {
  try {
    const { data } = await httpRequest.get("/products");
    return data;
  } catch (e) {
    console.warn(e);
  }
}

export { getAllProducts };
