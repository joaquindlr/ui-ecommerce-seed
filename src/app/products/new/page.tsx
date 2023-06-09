"use client";
//components
import { Button, Card, Input } from "@/components/atomics";
//styles
import style from "./new-product.module.scss";
import { ChangeEvent, useState } from "react";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  function onChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
  }

  function onChangePrice(e: ChangeEvent<HTMLInputElement>) {
    setPrice(e.target.value);
  }

  function onChangeStock(e: ChangeEvent<HTMLInputElement>) {
    setStock(e.target.value);
  }

  return (
    <div className={style["new-product"]}>
      <h2>Nuevo Producto</h2>
      <div className={style["new-product__card"]}>
        <Card>
          <form className={style["new-product__form"]}>
            <div className={style["new-product__input"]}>
              <Input value={name} onChange={onChangeName} label="Nombre" />
            </div>
            <div className={style["new-product__input"]}>
              <Input
                value={description}
                onChange={onChangeDescription}
                label="Descripcion"
              />
            </div>
            <div className={style["new-product__input"]}>
              <Input value={price} onChange={onChangePrice} label="Precio" />
            </div>
            <div className={style["new-product__input"]}>
              <Input value={stock} onChange={onChangeStock} label="Cantidad" />
            </div>
            <Button>Agregar</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
