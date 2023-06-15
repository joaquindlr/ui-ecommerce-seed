"use client";
import { Product } from "@/types/products.types";
import style from "./table.module.scss";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";

const ProductTable = ({ products }: { products: Product[] }) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>();
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredRowIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredRowIndex(null);
  };

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
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => {
          const isHovered = hoveredRowIndex === index;

          return (
            <tr
              className={style["table__element"]}
              key={product.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <td>
                <input
                  className={style["table__checkbox"]}
                  type="checkbox"
                ></input>
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                {isHovered && (
                  <div className={style["table__element-actions"]}>
                    <BsPencil
                      className={style["table__element-action"]}
                      color="#232323"
                    />
                    <BsTrash
                      className={style["table__element-action"]}
                      color="#232323"
                    />
                  </div>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
