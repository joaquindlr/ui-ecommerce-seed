"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

//components
import { Table } from "@/components";
import { Button, Card } from "@/components/atomics";
//utils
import style from "./products.module.scss";
import { Product } from "@/types/products.types";
//services
import { getAllProducts } from "../../services/ProductService";

const Products = () => {
  const [products, setProducts] = useState<Product[]>();
  const router = useRouter();

  async function getData() {
    const data = await getAllProducts();
    setProducts(data);
  }

  useEffect(function () {
    getData();
  }, []);

  function goToNewProduct() {
    router.push("/products/new");
  }

  return (
    <div className={style["products"]}>
      <div className={style["products__title-container"]}>
        <h2 className={style["products__title"]}>Productos</h2>
        <Button onClick={goToNewProduct}>AGREGAR</Button>
      </div>
      <div className={style["products__card"]}>
        <Card>{products && <Table products={products} />}</Card>
      </div>
    </div>
  );
};

export default Products;
