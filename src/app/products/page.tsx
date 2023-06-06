"use client";

//components
import { Table } from "@/components";
//utils
import style from "./products.module.scss";
//services
import { getAllProducts } from "../../services/ProductService";
import { Button } from "@/components/atomics";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/types/products.types";

const Products = () => {
  const [products, setProducts] = useState<Product[]>();

  async function getData() {
    const data = await getAllProducts();
    setProducts(data);
  }

  useEffect(function () {
    getData();
  }, []);

  const router = useRouter();

  function goToNewProduct() {
    router.push("/products/new");
  }

  return (
    <div className={style["products"]}>
      <div className={style["products__title-container"]}>
        <h2 className={style["products__title"]}>Products</h2>
        <Button onClick={goToNewProduct}>AGREGAR</Button>
      </div>
      <div className={style["products__card"]}>
        {products && <Table products={products} />}
      </div>
    </div>
  );
};

export default Products;
