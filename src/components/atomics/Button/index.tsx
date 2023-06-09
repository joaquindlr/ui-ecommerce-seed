import React, { ReactNode } from "react";
import style from "./button.module.scss";
import { font } from "@/assets/fonts";

const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  function onClickDefault(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    onClick && onClick(e);
  }
  return (
    <button
      onClick={onClickDefault}
      className={`${style["button"]} ${font.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
