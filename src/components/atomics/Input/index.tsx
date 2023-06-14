import {
  ChangeEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import style from "./input.module.scss";
import { InputEvent } from "@/types/general.types";

type OmitedProps = "className" | "style";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, OmitedProps> {
  label?: string;
  value?: string;
  onChange?: (e: InputEvent) => void;
  textArea?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  onChange,
  value,
  textArea,
  ...defaultProps
}) => {
  function handleChange(e: InputEvent) {
    if (onChange) onChange(e);
  }

  return (
    <div className={style["input"]}>
      {label && <label className={style["input__label"]}>{label}</label>}
      {textArea ? (
        <textarea
          value={value}
          onChange={handleChange}
          {...(defaultProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={style["input__border--area"]}
        />
      ) : (
        <input
          value={value}
          onChange={handleChange}
          {...defaultProps}
          className={style["input__border"]}
        />
      )}
    </div>
  );
};

export default Input;
