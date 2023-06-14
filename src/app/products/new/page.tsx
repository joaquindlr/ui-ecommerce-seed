"use client";
//components
import { Button, Card, Input } from "@/components/atomics";
//styles
import style from "./new-product.module.scss";
import { useState } from "react";
import { InputEvent } from "@/types/general.types";
import { useRouter } from "next/navigation";
import { addProduct } from "@/services/ProductService";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const router = useRouter();

  function onChangeName(e: InputEvent) {
    setName(e.target.value);
  }

  function onChangeDescription(e: InputEvent) {
    setDescription(e.target.value);
  }

  function onChangePrice(e: InputEvent) {
    setPrice(e.target.value);
  }

  function onChangeStock(e: InputEvent) {
    setStock(e.target.value);
  }

  async function handleConfirm() {
    const newProduct = {
      name,
      description,
      price: parseInt(price, 10),
      stock: parseInt(stock, 10),
    };
    await addProduct(newProduct);
  }

  function handleCancel() {
    router.back();
  }

  return (
    <div className={style["new-product"]}>
      <div className={style["new-product__header"]}>
        <h2>Nuevo Producto</h2>
        <div className={style["new-product__header-button"]}>
          <Button outlaned onClick={handleCancel}>
            CANCELAR
          </Button>
        </div>
      </div>
      <div className={style["new-product__card"]}>
        <Card>
          <form className={style["new-product__form"]}>
            <div className={style["new-product__input"]}>
              <Input value={name} onChange={onChangeName} label="Nombre" />
            </div>
            <div className={style["new-product__input"]}>
              <Input
                textArea
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
            <Button onClick={handleConfirm}>CONFIRMAR</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
