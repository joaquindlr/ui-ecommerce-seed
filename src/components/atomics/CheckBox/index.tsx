import { ChangeEvent, useEffect, useState } from "react";
import style from "./checkbox.module.scss";

interface CheckBoxProps {
  onCheck: (value: boolean) => void;
  isChecked?: boolean;
}

const CheckBox = ({ onCheck, isChecked }: CheckBoxProps) => {
  const [value, setValue] = useState<boolean>(false);

  useEffect(
    function () {
      setValue(isChecked ? isChecked : false);
    },
    [isChecked]
  );

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
    onCheck(event.target.checked);
  };

  return (
    <label className="checkbox-container">
      <input
        className={style["checkbox"]}
        type="checkbox"
        checked={value}
        onChange={handleCheckboxChange}
      />
    </label>
  );
};

export default CheckBox;
