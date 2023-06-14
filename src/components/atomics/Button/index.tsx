import React, { ReactNode } from "react";
import style from "./button.module.scss";
import { font } from "@/assets/fonts";

const Button = ({
  children,
  onClick,
  outlaned,
}: {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  outlaned?: boolean;
}) => {
  function onClickDefault(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    onClick && onClick(e);
  }

  const className = outlaned
    ? `${style["button"]} ${style["button--outlined"]} ${font.className}`
    : `${style["button"]} ${font.className}`;

  return (
    <button onClick={onClickDefault} className={className}>
      {children}
    </button>
  );
};

export default Button;
