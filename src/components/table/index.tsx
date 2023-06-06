"use client";
import { Product } from "@/types/products.types";
import style from "./table.module.scss";

const Table = ({ products }: { products: Product[] }) => {
  console.log(products);
  return (
    <table className={style["table"]}>
      <thead>
        <tr>
          <th>
            <input type="checkbox"></input>
          </th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>
                <input type="checkbox"></input>
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
