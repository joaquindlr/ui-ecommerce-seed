import { ProductRequest } from "@/types/products.types";
import httpRequest from "../services/HttpRequest";

async function getAllProducts() {
  try {
    const { data } = await httpRequest.get("/products");
    return data;
  } catch (e) {
    console.warn(e);
  }
}

async function addProduct(productRequest: ProductRequest) {
  try {
    await httpRequest.post("/products", productRequest);
  } catch (e) {
    console.warn(e);
  }
}

export { getAllProducts, addProduct };
