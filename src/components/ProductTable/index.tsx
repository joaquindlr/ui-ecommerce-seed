"use client";
import { useEffect, useState } from "react";
import { Product } from "@/types/products.types";
import style from "./table.module.scss";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { CheckBox } from "../atomics";

const ProductTable = ({ products }: { products: Product[] }) => {
  const [selectedProductsIds, setSelectedProductsIds] = useState<number[]>([]);
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredRowIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredRowIndex(null);
  };

  const productIsChecked = (productId: number) =>
    selectedProductsIds.includes(productId);

  function selectAllProducts() {
    const productsIds = products.map((product) => product.id);
    setSelectedProductsIds(productsIds);
  }

  function unSelectAllProducts() {
    setSelectedProductsIds([]);
  }

  function handleMainCheckBox(value: boolean) {
    if (value) {
      selectAllProducts();
    } else {
      unSelectAllProducts();
    }
  }

  useEffect(
    function () {
      console.log(selectedProductsIds);
    },
    [selectedProductsIds]
  );

  return (
    <table className={style["table"]}>
      <thead>
        <tr>
          <th>
            <CheckBox onCheck={handleMainCheckBox} />
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
                <CheckBox
                  isChecked={productIsChecked(product.id)}
                  onCheck={() => console.log("se agrega: ", product.id)}
                />
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
