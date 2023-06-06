//components
import { Table } from "@/components";
//utils
import style from "./products.module.scss";
//services
import { getAllProducts } from "../../services/ProductService";
import { Button } from "@/components/atomics";

export default async function Products() {
  const products = await getAllProducts();

  return (
    <div className={style["products"]}>
      <div className={style["products__title-container"]}>
        <h2 className={style["products__title"]}>Products</h2>
        <Button>AGREGAR</Button>
      </div>
      <div className={style["products__card"]}>
        <Table products={products} />
      </div>
    </div>
  );
}
