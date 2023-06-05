//componentes
import { Table } from "@/components";
//utils
import { Product } from "@/types/products.types";
import style from "./products.module.scss";
//services
import { getAllProducts } from "../../services/ProductService";

export default async function Products() {
  const products = await getAllProducts();
  console.log(products);
  return (
    <div className={style["products"]}>
      <h2 className={style["products__title"]}>Products</h2>
      <div className={style["products__card"]}>
        <Table products={products} />
      </div>
    </div>
  );
}

const productsMOCK: Product[] = [
  {
    id: 1,
    name: "producto 1",
    description: "descripcion de producto 1",
    price: 1670,
    stock: 100,
  },
  {
    id: 2,
    name: "producto 2",
    description: "descripcion de producto 2",
    price: 1310,
    stock: 90,
  },
  {
    id: 3,
    name: "producto 3",
    description: "descripcion de producto 3",
    price: 1580,
    stock: 80,
  },
];
