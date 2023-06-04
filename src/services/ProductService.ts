import httpRequest from "./httpRequest";

const getAllProducts = async () => {
  try {
    const { data } = await httpRequest.get("/products");
    return data;
  } catch (e) {
    console.warn(e);
  }
};

export { getAllProducts };
