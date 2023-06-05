import httpRequest from "../services/HttpRequest";

const getAllProducts = async () => {
  try {
    const { data } = await httpRequest.get("/products");
    return data;
  } catch (e) {
    console.warn(e);
  }
};

export { getAllProducts };
