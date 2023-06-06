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
  return (
    <button
      onClick={onClick}
      className={`${style["button"]} ${font.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
