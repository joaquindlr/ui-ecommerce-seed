import { Product } from "@/types/products.types";
import style from "./table.module.scss";

const Table = ({ products }: { products: Product[] }) => {
  return (
    <table className={style["table"]}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
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
