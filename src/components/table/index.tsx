import { Product } from "@/types/products.types";
import style from "./table.module.scss";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const Table = ({ products }: { products: Product[] }) => {
  return (
    <table className={style["table"]}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <AiOutlineEdit />
                <AiOutlineDelete />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
