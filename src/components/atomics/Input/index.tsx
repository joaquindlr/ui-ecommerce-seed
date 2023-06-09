import { ChangeEventHandler, InputHTMLAttributes } from "react";
import style from "./input.module.scss";

type OmitedProps = "className" | "style";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, OmitedProps> {
  label?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  label,
  onChange,
  value,
  ...defaultProps
}) => (
  <div className={style["input"]}>
    {label && <label className={style["input__label"]}>{label}</label>}
    <input
      onChange={onChange}
      value={value}
      {...defaultProps}
      className={style["input__border"]}
    />
  </div>
);

export default Input;
