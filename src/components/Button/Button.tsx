import React, { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react";
import "./Button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  setValue: Dispatch<SetStateAction<any>>;
  value: number;
}
export const Button = ({ label, setValue, value }: Props) => {
  return (
    <button className="button" onClick={() => setValue(value)}>
      {label}
    </button>
  );
};
