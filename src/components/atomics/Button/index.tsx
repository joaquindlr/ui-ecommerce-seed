import React, { ReactNode } from "react";
import style from "./button.module.scss";
import { font } from "@/assets/fonts";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className={`${style["button"]} ${font.className}`}>
      {children}
    </button>
  );
};

export default Button;
