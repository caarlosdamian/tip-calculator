import React from "react";
import "./Input.scss";

interface Props {
  icon: string;
  onChange?: () => {};
}

export const Input = ({ icon }: Props) => {
  return (
    <div className="input__container">
      <img src={icon} alt={icon} className="input__icon" />
      <input className="input__number" placeholder="0" />
    </div>
  );
};
